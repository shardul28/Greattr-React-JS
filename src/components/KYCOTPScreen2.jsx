import React, { useState } from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: 0,
  width: 400,
  height: 692,
  background: "#FFFFFF",
  borderRadius: 32,
};

const navigationStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "absolute",
  width: 352,
  height: 28,
  left: 24,
  top: 47,
  background: "#FFFFFF",
  gap: 10,
};

const closeButtonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 4,
  margin: "0 auto",
  width: 28,
  height: 28,
  background: "#E4E7E7",
  borderRadius: 16,
  border: "none",
  cursor: "pointer",
};

const headerStyle = {
  width: 400,
  height: 160,
  background: "#FFFFFF",
  paddingTop: 75,
  paddingLeft: 24,
  boxSizing: "border-box",
  textAlign: "center",
};

const titleStyle = {
  fontFamily: "DM Sans",
  fontWeight: 700,
  fontSize: 24,
  color: "#081717",
  marginBottom: 8,
};

const subtitleStyle = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: 14,
  color: "#081717",
  marginBottom: 8,
  textAlign: "center",
};

const otpStackStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 8,
  width: 368,
  margin: "0 auto",
};

const otpRowStyle = {
  display: "flex",
  flexDirection: "row",
  gap: 10,
  width: 326,
};

const otpInputStyle = {
  boxSizing: "border-box",
  width: 46,
  height: 50,
  background: "rgba(217, 217, 217, 0.2)",
  border: "2px solid rgba(0, 0, 0, 0.1)",
  borderRadius: 8,
  fontSize: 24,
  textAlign: "center",
  fontFamily: "DM Sans",
  color: "#081717",
};

const guideContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "8px 0px",
  gap: 10,
  width: 368,
  margin: "0 auto",
};

const pillAlertStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "4px 16px",
  gap: 10,
  width: 245,
  height: 24,
  background: "#F4F5F5",
  borderRadius: 24,
};

const pillAlertTextStyle = {
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: 12,
  color: "rgba(8, 23, 23, 0.6)",
};

const phoneIconStyle = {
  marginTop: 20,
  marginBottom: 10,
};

const submitButtonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 16px",
  background: "#3F117D",
  borderRadius: 4,
  width: 352,
  height: 40,
  border: "none",
  color: "#FFFFFF",
  fontFamily: "DM Sans",
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "22px",
  cursor: "pointer",
  margin: "24px auto 0",
};

const textLinkStyle = {
  color: "#80807F",
  fontFamily: "DM Sans",
  fontWeight: 400,
  fontSize: 14,
  margin: "12px auto",
  textAlign: "center",
  textDecoration: "underline",
  cursor: "pointer",
};

const logoStyle = {
  width: 86,
  height: 19,
  margin: "22px auto 0",
};

export default function KycOtpScreen2() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (e, idx) => {
    let value = e.target.value.replace(/[^0-9]/g, "");
    // Only allow entering 1 digit per input
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);

    // Move focus to next box automatically
    if (value && idx < 5) {
      const nextInput = document.getElementById(`otp-input-${idx + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit OTP for verification
    // Add your logic here
    alert("OTP Submitted: " + otp.join(""));
  };

  return (
    <div style={containerStyle}>
      <div style={navigationStyle}>
        <div />
        <button style={closeButtonStyle} tabIndex={0}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <line
              x1="4"
              y1="4"
              x2="16"
              y2="16"
              stroke="#081717"
              strokeWidth="1.6"
            />
            <line
              x1="16"
              y1="4"
              x2="4"
              y2="16"
              stroke="#081717"
              strokeWidth="1.6"
            />
          </svg>
        </button>
      </div>
      <div style={headerStyle}>
        <div style={titleStyle}>KYC Verification</div>
        <div style={subtitleStyle}>
          Enter the OTP sent to the customer's mobile number linked with their
          aadhaar number XXXX-XXXX-1234.
        </div>
      </div>

      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <div style={otpStackStyle}>
          <div style={otpRowStyle}>
            {otp.map((d, idx) => (
              <input
                key={idx}
                id={`otp-input-${idx}`}
                style={otpInputStyle}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={d}
                autoFocus={idx === 0}
                onChange={(e) => handleOtpChange(e, idx)}
              />
            ))}
          </div>
        </div>

        <div style={guideContainerStyle}>
          <div style={pillAlertStyle}>
            <span style={pillAlertTextStyle}>
              Make sure the code isn’t expiring soon
            </span>
          </div>
          <div style={phoneIconStyle}>
            {/* You can substitute this with your own SVG / image if needed */}
            <svg width="40" height="60" viewBox="0 0 40 60">
              <rect
                x="5"
                y="5"
                width="30"
                height="50"
                rx="8"
                fill="#FCFCFC"
                stroke="#495050"
                strokeWidth="3"
              />
              {/* Enter dots for password effect */}
              <circle cx="15" cy="30" r="2" fill="#081717" />
              <circle cx="25" cy="30" r="2" fill="#081717" />
              <rect x="15" y="40" width="10" height="6" rx="2" fill="#626A6A" />
            </svg>
          </div>
        </div>

        <div style={textLinkStyle}>
          Didn’t receive code?{" "}
          <span style={{ color: "#3F117D", cursor: "pointer" }}>Resend</span>
        </div>

        <button type="submit" style={submitButtonStyle}>
          Submit
        </button>
      </form>

      <div style={logoStyle}>
        {/* Replace with your logo image */}
        <svg width="86" height="20" viewBox="0 0 86 20">
          <rect width="86" height="20" rx="4" fill="#3F117D" />
          <text
            x="43"
            y="14"
            textAnchor="middle"
            fill="#FFF"
            fontSize="12"
            fontFamily="sans-serif"
          >
            Greattr
          </text>
        </svg>
      </div>
    </div>
  );
}
