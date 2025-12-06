import { useParams, useNavigate } from "react-router-dom";
import { getComplaints, updateComplaint } from "../utils/storage";
import { useState, useEffect } from "react";

export default function EditComplaint() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    names: "",
    phone: "",
    location: "",
    issue: "",
  });

  useEffect(() => {
    const data = getComplaints()[id];
    if (data) setForm(data);
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function save() {
    updateComplaint(id, form);
    navigate("/admin");
  }

  return (
    <div className="form-wrapper">
      <h2>Hindura Ikibazo</h2>

      <div className="form-box">
        <input name="names" value={form.names} onChange={handleChange} />
        <input name="phone" value={form.phone} onChange={handleChange} />
        <input name="location" value={form.location} onChange={handleChange} />
        <textarea name="issue" value={form.issue} onChange={handleChange} />

        <button onClick={save}>Update</button>
      </div>
    </div>
  );
}

