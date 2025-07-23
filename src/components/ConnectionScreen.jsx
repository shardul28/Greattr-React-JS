import React, { useEffect, useState } from "react";

export default function ConnectionScreen({ goTo }) {
  const [loading, setLoading] = useState(true);

  // Optionally simulate completion of loading for demonstration
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      goTo("LinkAccount");
    }
  }, [loading, goTo]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#fff",
      }}
    >
      {/* Spinner */}
      <div
        style={{
          marginBottom: 32,
        }}
      >
        <svg width={80} height={80} viewBox="0 0 50 50">
          <circle
            cx={25}
            cy={25}
            r={20}
            fill="none"
            stroke="#3f117d"
            strokeWidth="7"
            strokeDasharray="100"
            strokeDashoffset="75"
            strokeLinecap="round"
            style={{
              transformOrigin: "center",
              animation: "spin 1s linear infinite",
            }}
          />
          <style>{`
            @keyframes spin {
              100% { transform: rotate(360deg);}
            }
          `}</style>
        </svg>
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          fontWeight: "600",
          fontSize: 22,
          color: "#131E22",
          textAlign: "center",
        }}
      >
        Connecting to Greattr
      </div>
    </div>
  );
}
