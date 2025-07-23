// SDK.js (or index.js for quick demo)
import React, { useState } from "react";
import LinkAccount from "./components/LinkAccount";
import CaptchaScreen from "./components/CaptchaScreen";
import KYCSuccessScreen from "./components/KYCSuccessScreen";
import KYCOTPScreen from "./components/KYCOTPScreen";
import KycOtpScreen2 from "./components/KYCOTPScreen2";
import ConnectionScreen from "./components/ConnectionScreen";

// Main Router Component
const SDK = ({
  company,
  mobileNumber,
  userType,
  process,
  APIKey,
  onComplete,
}) => {
  // const handleSubmit = () => {
  //   // Simulate a result
  //   const result = {
  //     status: "success",
  //     verifiedMobile: mobileNumber,
  //     userId,
  //     token: "abc123xyz",
  //     timestamp: new Date().toISOString(),
  //   };

  //   if (onComplete) onComplete(result); // Return values
  // };
  const [currentPage, setCurrentPage] = useState("ConnectionScreen");
  const [data, setdata] = useState({});

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "ConnectionScreen":
        return <ConnectionScreen goTo={setCurrentPage} />;
      case "LinkAccount":
        return (
          <LinkAccount
            goTo={setCurrentPage}
            company={company}
            setdata={setdata}
            data={data}
          />
        );
      case "CaptchaScreen":
        return (
          <CaptchaScreen goTo={setCurrentPage} setdata={setdata} data={data} />
        );
      case "KYCOTPScreen":
        return (
          <KYCOTPScreen goTo={setCurrentPage} setdata={setdata} data={data} />
        );
      case "KycOtpScreen2":
        return (
          <KycOtpScreen2 goTo={setCurrentPage} setdata={setdata} data={data} />
        );
      case "KYCSuccessScreen":
        return (
          <KYCSuccessScreen
            goTo={setCurrentPage}
            setdata={setdata}
            data={data}
          />
        );
      default:
        return (
          <ConnectionScreen
            goTo={setCurrentPage}
            setdata={setdata}
            data={data}
          />
        );
    }
  };

  return (
    <div className="sdk-wrapper">
      <div className="variables-section">
        <h3>App Data:</h3>
        <h3>{process.env.REACT_APP_API_LINK}</h3>
        <strong>Mobile Number:</strong> {mobileNumber}
        <strong>User Type:</strong> {userType}
        <strong>Process:</strong> {process}
        <strong>API Key:</strong> {APIKey}
        <strong>Company:</strong> {company}
      </div>

      {renderCurrentPage()}
    </div>
  );
};

export default SDK;
