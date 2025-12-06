import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "../styles/Card.css";

export default function Card({ item, onDelete, onEdit }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p className="card-category">{item.category || "General issue"}</p>

      <p className="card-desc">{item.description}</p>

      <div className="card-footer">
        <span>{new Date(item.date).toLocaleString()}</span>

        <div className="card-actions">
          <button onClick={() => onEdit(item)}>
            <FaEdit />
          </button>
          <button className="danger" onClick={() => onDelete(item.id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}