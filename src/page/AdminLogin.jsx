import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple login
    if (username === "admin" && password === "12345") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin-dashboard");
    } else {
      alert("Username cyangwa password si byo");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <input 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} required />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Injira</button>
      </form>
    </div>
  );
}

