// src/hooks/UseExample.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UseExample = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React SDK Demo</h2>
      <h3>Count: {count}</h3>

      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px 20px", fontSize: "16px", margin: "10px" }}
      >
        Increment
      </button>

      <button
        onClick={() => navigate("/about")}
        style={{ padding: "10px 20px", fontSize: "16px", margin: "10px" }}
      >
        Go to About
      </button>
    </div>
  );
};
