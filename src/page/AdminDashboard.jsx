import { useState, useEffect } from "react";
import { getComplaints, updateComplaint, deleteComplaint } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  const loadComplaints = () => {
    setComplaints(getComplaints());
  };

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) navigate("/admin-login");
    loadComplaints();
  }, [navigate]);

  const handleReply = (index) => {
    const reply = prompt("Andika igisubizo kuri iki kibazo:");
    if (!reply) return;
    const updated = { ...complaints[index], reply, status: "Resolved" };
    updateComplaint(index, updated);
    loadComplaints();
  };

  const handleDelete = (index) => {
    if (window.confirm("Urashaka gusiba iki kibazo?")) {
      deleteComplaint(index);
      loadComplaints();
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      {complaints.length === 0 ? <p>Nta bibazo bihari.</p> :
        complaints.map((c, i) => (
          <div key={i} className="complaint-card">
            <p><strong>Uwatanze:</strong> {c.userName}</p>
            <p><strong>Type:</strong> {c.type}</p>
            <p><strong>Ikibazo:</strong> {c.issue}</p>
            <p><strong>Status:</strong> <span className={c.status === "Resolved" ? "resolved" : "pending"}>{c.status}</span></p>
            <p><strong>Ibisubizo:</strong> {c.reply || "Nta gisubizo"} </p>
            <div className="admin-actions">
              <button className="btn-reply" onClick={() => handleReply(i)}>Reply</button>
              <button className="btn-delete" onClick={() => handleDelete(i)}>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

