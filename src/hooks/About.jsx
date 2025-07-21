// src/hooks/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>About Page</h2>
      <p>This is a test route in your React app.</p>

      <button
        onClick={() => navigate("/")}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Back to Home
      </button>
    </div>
  );
};
