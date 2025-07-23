import React, { useEffect, useState } from "react";
import PoweredBy from "./PoweredBy";
import axios from "axios";

const initialCaptcha = "a553d"; // you can make this dynamic as required

export default function CaptchaScreen({ goto, setdata, data }) {
  const [aadhaar, setAadhaar] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateAadhaar = (num) => /^\d{12}$/.test(num);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!validateAadhaar(aadhaar)) {
      setError("Please enter a valid 12-digit Aadhaar number.");
      return;
    }
    if (captcha.trim().toLowerCase() !== initialCaptcha) {
      setError("Incorrect captcha code.");
      return;
    }
    setSuccess(true);
  };

  const [captchaValue, setCaptchaValue] = useState(null); // State for captcha
  const [okycdata, setokycdata] = useState(null);
  const [isAadharComplete, setisAadharComplete] = useState(false);
  const [loading, setloading] = useState(false);

  const generateCaptcha = async () => {
    try {
      setloading(true);
      const response = await axios({
        url: `${process.env.REACT_APP_API_LINK}/sdk/generate-captcha`,
        method: "POST",
        responseType: "json",
        headers: {},
        data: {
          // uid: state?.AadhaarNumber.replace(/-/g, ""),
          // uniqueId: state?.MobileNumber,
        },
      });
      console.log(response?.data);

      if (response.status === 500) {
        setError("Error", "Some problem has occured . Please try again later");
      } else {
        console.log("/kyc/generate-captcha", response?.data);
        setCaptchaValue("");
        setloading(false);
        setokycdata(response?.data);
      }
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 401) {
        setError("Session Expired", "Please Login Again");
      }
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    if (isAadharComplete) {
      generateCaptcha();
    }
  }, [isAadharComplete]);

  const getOtp = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      setloading(true);
      const aadhaarRegex = /^\d{12}$/;
      const cleanAadhaar = aadhaar.replace(/-/g, "");
      const isValidAadhaar = aadhaarRegex.test(cleanAadhaar);

      if (!isValidAadhaar) {
        console.log(isValidAadhaar);

        setError("Please enter a valid 12-digit Aadhaar number");
        return;
      }
      if (!captchaValue) {
        setError("Validation Error", "Please complete the captcha.");
        return;
      }

      // Verify the captcha
      const captchaResponse = await api.post(
        `${process.env.REACT_APP_API_LINK}/kyc/dist-App-generate-otp`,
        {
          captcha: captchaValue,
          uid: cleanAadhaar,
          ...okycdata,
        },
        {
          headers: {
            // Add any additional headers here if needed
          },
        }
      );

      console.log("get otp response", captchaResponse);

      if (captchaResponse.data.statusCode !== 200) {
        setError(
          "Captcha verification failed. Please check captcha and try again."
        );
        return;
      }

      if (captchaResponse.status === 200) {
        // setisOtpSent(true);
        // setShowOtpComponent(true);
        // setokycdata(captchaResponse.data);
        //setError('Success', 'OTP Sent Successfully');
        setdata({ ...data, captchaResponse: captchaResponse.data });
        goto("KYCOTPScreen");
        return;
      } else if (
        captchaResponse?.status === 400 &&
        captchaResponse?.data?.message === "Captcha value doesn't match"
      ) {
        setError("Error", "Captcha value doesn't match. Please try again.");
        return;
      } else {
        setError("Captcha verification timed out. Please reload the page.");
        return;
      }
    } catch (err) {
      console.error("Error generating OTP:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setloading(false);
    }
  };
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        fontFamily: "sans-serif",
        borderRadius: 8,
        padding: 24,
        marginTop: 32,
      }}
    >
      <button
        onClick={() => setError("Close clicked")}
        style={{
          float: "right",
          border: "none",
          background: "none",
          fontSize: 22,
          cursor: "pointer",
        }}
      >
        ×
      </button>
      <h2 style={{ textAlign: "center" }}>KYC Verification</h2>
      <p style={{ textAlign: "center" }}>
        Please enter your aadhaar number and captcha to continue.
      </p>
      <form onSubmit={getOtp} autoComplete="off">
        <input
          type="text"
          placeholder="Enter Aadhaar Number"
          maxLength={12}
          value={aadhaar}
          onChange={(e) => {
            const numericValue = e.target.value.replace(/\D/g, "");
            setAadhaar(numericValue);

            if (numericValue.length === 12) {
              setisAadharComplete(true);
            } else {
              setisAadharComplete(false);
            }
          }}
          style={{
            width: "100%",
            margin: "12px 0",
            padding: 10,
            fontSize: 16,
            borderRadius: 5,
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        <p
          style={{ padding: 0, fontSize: 12, margin: 0 }}
          onClick={generateCaptcha}
        >
          Resend Captcha
        </p>
        {isAadharComplete && (
          <img
            src={`data:image/png;base64,${okycdata?.encodedCaptcha || ""}`}
            alt="captcha"
          />
        )}

        <input
          type="text"
          placeholder="Enter Captcha code"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          style={{
            width: "100%",
            margin: "12px 0",
            padding: 10,
            fontSize: 16,
            borderRadius: 5,
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        <div style={{ fontSize: 12, color: "#555", marginBottom: 20 }}>
          By continuing, you agree to our <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy &amp; Cookies</a> policies.
        </div>

        {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
        {success && (
          <div style={{ color: "green", marginBottom: 8 }}>
            Submission successful!
          </div>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            background: "#3f117d",
            color: "#fff",
            fontWeight: "bold",
            padding: "12px 0",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 18,
            marginBottom: 12,
          }}
        >
          Submit
        </button>
      </form>

      <PoweredBy />
    </div>
  );
}
