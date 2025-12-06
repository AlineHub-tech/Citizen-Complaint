import { useEffect, useState } from "react";
import { getComplaints } from "../utils/storage";
import "../styles/user.css";

export default function UserDashboard() {
  const [myComplaints, setMyComplaints] = useState([]);

  useEffect(() => {
    setMyComplaints(getComplaints());
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard y’Umukoresha</h2>
      {myComplaints.length === 0 ? (
        <p>Nta bibazo watanze kugeza ubu.</p>
      ) : (
        myComplaints.map((c, i) => (
          <div key={i} className="complaint-card">
            <p><strong>Ikibazo:</strong> {c.issue}</p>
            <p><strong>Umuyobozi:</strong> {c.managerName} ({c.position})</p>
            <p><strong>Status:</strong> <span className={c.status === "Resolved" ? "resolved" : "pending"}>{c.status}</span></p>
            <p><strong>Ibisubizo:</strong> {c.reply || "Nta gisubizo kugeza ubu"}</p>
          </div>
        ))
      )}
    </div>
  );
}

