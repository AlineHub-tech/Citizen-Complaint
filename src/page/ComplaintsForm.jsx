import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveComplaint } from "../utils/storage";
import "../styles/ComplaintsForm.css";

export default function ComplaintForm() {
  const [names, setNames] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [issue, setIssue] = useState("");
  const [managerName, setManagerName] = useState("");
  const [position, setPosition] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newComplaint = {
      names,
      phone,
      location,
      issue,
      managerName,
      position,
      status: "Pending",
      reply: ""
    };

    saveComplaint(newComplaint);  // Ibi byohereza muri LocalStorage
    navigate("/user-dashboard");
  };

  return (
    <form className="form-box" onSubmit={submitForm}>
      <h2>Tanga Ikibazo</h2>
      <input placeholder="Amazina" value={names} onChange={e => setNames(e.target.value)} required />
      <input placeholder="Telephone" value={phone} onChange={e => setPhone(e.target.value)} required />
      <input placeholder="Aho utuye" value={location} onChange={e => setLocation(e.target.value)} required />
      <textarea placeholder="Ikibazo" value={issue} onChange={e => setIssue(e.target.value)} required />
      <input placeholder="Izina ry’umuyobozi" value={managerName} onChange={e => setManagerName(e.target.value)} required />
      <input placeholder="Position" value={position} onChange={e => setPosition(e.target.value)} required />
      <button type="submit">Ohereza</button>
    </form>
  );
}