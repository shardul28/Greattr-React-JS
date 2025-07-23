// KYCSuccessScreen.js
import React from "react";

export default function KYCSuccessScreen() {
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        textAlign: "center",
        fontFamily: "sans-serif",
        background: "#fff",
        borderRadius: 12,
        padding: 28,
      }}
    >
      <button
        style={{
          float: "right",
          border: "none",
          background: "none",
          fontSize: 22,
          cursor: "pointer",
        }}
      >
        &times;
      </button>
      <div style={{ margin: "60px 0 35px 0" }}>
        <div
          style={{
            background: "#7F3DD2",
            display: "inline-block",
            borderRadius: "50%",
            width: 90,
            height: 90,
            lineHeight: "90px",
          }}
        >
          <span style={{ fontSize: 48, color: "#fff" }}>✔</span>
        </div>
      </div>
      <h2 style={{ fontWeight: 700, margin: "20px 0 12px 0" }}>
        KYC Verification
        <br />
        Successful
      </h2>
      <div style={{ color: "#7B8492", fontSize: 18, marginBottom: 35 }}>
        Your KYC setup is complete, and you're all set to proceed with the loan
        application.
      </div>
      <button
        style={{
          width: "100%",
          padding: "14px 0",
          borderRadius: 9,
          border: "none",
          background: "#3f117d",
          color: "#fff",
          fontWeight: 600,
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        Proceed
      </button>
      <div
        style={{ marginTop: 40, color: "#222", fontWeight: 500, fontSize: 15 }}
      >
        Powered by{" "}
        <span style={{ color: "#8C6CD6", fontWeight: 700 }}>Greattr</span>
      </div>
    </div>
  );
}
