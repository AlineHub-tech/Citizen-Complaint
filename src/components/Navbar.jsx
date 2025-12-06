import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">Citizen<span>Help</span></div>
      <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
      <div className={`links ${open ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/complaint">Submit Complaint</Link>
        <Link to="/user-dashboard">User Dashboard</Link>
        <Link to="/admin-login">Admin</Link>
      </div>
    </nav>
  );
}