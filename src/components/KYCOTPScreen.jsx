// KYCOTPScreen.js
import React, { useState } from "react";

export default function KYCOTPScreen() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [error, setError] = useState("");

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[idx] = value;

    // Auto-focus next input
    setOtp(newOtp);
    if (value && idx < 5) {
      document.getElementById(`otp-${idx + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (otp.some((v) => v === "")) {
      setError("Please enter the full OTP.");
      return;
    }
    // Example validation: correct OTP is "123456"
    if (otp.join("") !== "123456") {
      setError("Incorrect OTP.");
      return;
    }
    alert("OTP Verified (simulate navigation to success)");
  };

  return (
    <form
      onSubmit={handleSubmit}
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
        type="button"
      >
        &times;
      </button>
      <h2 style={{ fontWeight: 700 }}>KYC Verification</h2>
      <div style={{ margin: "10px 0 24px 0", color: "#222", lineHeight: 1.4 }}>
        Enter the OTP sent to the customer's mobile number linked with their
        aadhaar number <b>XXXX-XXXX-1234</b>.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          margin: "24px 0",
        }}
      >
        {otp.map((d, idx) => (
          <input
            key={idx}
            id={`otp-${idx}`}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={d}
            onChange={(e) => handleChange(e, idx)}
            style={{
              width: 46,
              height: 46,
              border: "1px solid #ddd",
              borderRadius: 10,
              textAlign: "center",
              fontSize: 24,
              background: "#fafafa",
            }}
          />
        ))}
      </div>
      <div
        style={{
          color: "#9CA3AF",
          fontSize: 15,
          background: "#f4f6f7",
          borderRadius: 18,
          padding: "6px 18px",
          display: "inline-block",
          marginBottom: 20,
        }}
      >
        Make sure the code isn’t expiring soon
      </div>
      <div style={{ margin: "20px 0" }}>
        <svg width={45} height={70} viewBox="0 0 48 70" fill="none">
          <rect
            x={10}
            y={10}
            width={28}
            height={50}
            rx={7}
            fill="#fff"
            stroke="#333"
            strokeWidth={2}
          />
          <rect x={20} y={35} width={8} height={8} rx={2} fill="#ddd" />
          <rect x={10} y={15} width={28} height={14} rx={4} fill="#ededed" />
          <path d="M24 19 v10" stroke="#333" strokeWidth={2} />
          <rect x={17} y={27} width={14} height={10} rx={3} fill="#aaa" />
        </svg>
        <br />
        <span style={{ fontSize: 24, color: "#222" }}>↑</span>
      </div>
      <div>
        <span style={{ color: "#747174" }}>Didn't receive code? </span>
        <a href="#" style={{ color: "#4B28A8", fontWeight: "500" }}>
          Resend
        </a>
      </div>
      {error && <div style={{ color: "red", margin: "10px 0" }}>{error}</div>}
      <button
        type="submit"
        style={{
          width: "100%",
          margin: "28px 0 10px 0",
          padding: "14px",
          borderRadius: 9,
          border: "none",
          background: "#3f117d",
          color: "#fff",
          fontWeight: 600,
          fontSize: 18,
          cursor: "pointer",
        }}
      >
        Submit
      </button>
      <div
        style={{ marginTop: 20, color: "#222", fontWeight: 500, fontSize: 15 }}
      >
        Powered by{" "}
        <span style={{ color: "#8C6CD6", fontWeight: 700 }}>Greattr</span>
      </div>
    </form>
  );
}
