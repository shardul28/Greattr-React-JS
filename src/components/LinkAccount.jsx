import React, { useEffect, useState } from "react";
import axios from "axios";
import linkflow from "../img/Linkflow.png";

import PoweredBy from "./PoweredBy";
function LinkAccount({ goTo, company }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true);
      try {
        const response = await axios.get(process.env.REACT_APP_API_LINK, {
          company: company,
          timestamp: new Date().toISOString(),
        });

        console.log("Session started:", response.data);

        // Optionally: Navigate or store something
        // goTo("CaptchaScreen");
      } catch (error) {
        console.error("API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [company]); // re-run if `company` prop changes
  return (
    <div style={styles.container}>
      <button style={styles.closeButton} aria-label="Close">
        ×
      </button>
      <h2 style={styles.heading}>Link your account</h2>
      <p style={styles.description}>
        It looks like you're not registered with Greattr yet.
        <br />
        No worries! Let's get you signed up quickly.
      </p>

      <div style={styles.progressContainer}>
        <img src={linkflow} alt="Loading" />
      </div>

      <div style={styles.infoSection}>
        <InfoItem
          icon={0}
          title="Private"
          description={`Your credentials will never be made accessible to ${company} or Greattr.`}
        />
        <InfoItem
          icon={1}
          title="Encrypted data"
          description="Your information is encrypted using bank grade security."
        />
        <InfoItem
          icon={2}
          title="Secured"
          description={`${company} or Greattr doesn’t have access to your sensitive information.`}
        />
      </div>

      <button
        style={styles.continueButton}
        onClick={() => {
          goTo("CaptchaScreen");
        }}
      >
        {" "}
        Continue
      </button>
      <PoweredBy />
    </div>
  );
}

// InfoItem reusable subcomponent
function InfoItem({ icon, title, description }) {
  return (
    <div style={styles.infoItem}>
      <span style={styles.infoIcon}>
        {icon === 0 ? (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2501 21.5003C20.1516 21.5005 20.054 21.4812 19.963 21.4434C19.872 21.4057 19.7894 21.3503 19.7199 21.2805L3.21994 4.78049C3.08522 4.6387 3.01123 4.44989 3.01373 4.25431C3.01624 4.05874 3.09504 3.87189 3.23334 3.73359C3.37164 3.59528 3.5585 3.51648 3.75407 3.51398C3.94964 3.51147 4.13845 3.58547 4.28025 3.72018L20.7803 20.2202C20.8851 20.3251 20.9564 20.4587 20.9854 20.6041C21.0143 20.7496 20.9994 20.9003 20.9427 21.0373C20.8859 21.1743 20.7899 21.2914 20.6666 21.3738C20.5433 21.4562 20.3984 21.5003 20.2501 21.5003V21.5003Z"
              fill="#3F117D"
            />
            <path
              d="M11.625 15.3052L9.19736 12.8775C9.18345 12.8637 9.16557 12.8546 9.14623 12.8515C9.12688 12.8484 9.10705 12.8514 9.08952 12.8602C9.07199 12.8689 9.05763 12.8829 9.04847 12.9003C9.03931 12.9176 9.03581 12.9373 9.03846 12.9567C9.13646 13.5866 9.43219 14.1689 9.88291 14.6196C10.3336 15.0704 10.916 15.3661 11.5458 15.4641C11.5652 15.4667 11.585 15.4632 11.6023 15.4541C11.6196 15.4449 11.6336 15.4306 11.6424 15.413C11.6511 15.3955 11.6541 15.3757 11.651 15.3563C11.6479 15.337 11.6388 15.3191 11.625 15.3052Z"
              fill="#3F117D"
            />
            <path
              d="M12.3751 9.69467L14.8065 12.1251C14.8204 12.1391 14.8383 12.1484 14.8577 12.1516C14.8772 12.1548 14.8971 12.1518 14.9148 12.1431C14.9324 12.1343 14.9469 12.1202 14.956 12.1028C14.9652 12.0853 14.9686 12.0654 14.9659 12.0459C14.8681 11.4152 14.5722 10.832 14.1209 10.3808C13.6696 9.92947 13.0864 9.63352 12.4557 9.53576C12.4362 9.53275 12.4162 9.53599 12.3986 9.54501C12.381 9.55403 12.3667 9.56838 12.3578 9.586C12.3489 9.60362 12.3457 9.62362 12.3488 9.64314C12.3519 9.66265 12.3611 9.68069 12.3751 9.69467V9.69467Z"
              fill="#3F117D"
            />
            <path
              d="M23.0157 13.3137C23.1709 13.0702 23.253 12.7872 23.2522 12.4984C23.2513 12.2096 23.1676 11.927 23.0111 11.6844C21.7707 9.76625 20.1615 8.13687 18.3578 6.97203C16.3595 5.68203 14.1564 5 11.9851 5C10.8405 5.00157 9.70363 5.1882 8.61856 5.55266C8.58819 5.56276 8.56091 5.58046 8.53932 5.60409C8.51773 5.62771 8.50255 5.65647 8.49522 5.68763C8.48789 5.71878 8.48865 5.75129 8.49744 5.78207C8.50623 5.81284 8.52276 5.84085 8.54543 5.86344L10.7598 8.07781C10.7828 8.10086 10.8114 8.11751 10.8428 8.12614C10.8742 8.13477 10.9073 8.13508 10.9389 8.12703C11.6895 7.94411 12.4745 7.95752 13.2184 8.16595C13.9623 8.37438 14.64 8.77082 15.1863 9.3171C15.7326 9.86337 16.129 10.5411 16.3375 11.285C16.5459 12.0289 16.5593 12.8139 16.3764 13.5645C16.3684 13.596 16.3688 13.629 16.3774 13.6603C16.386 13.6916 16.4026 13.7202 16.4256 13.7431L19.6107 16.9306C19.6439 16.9638 19.6883 16.9834 19.7351 16.9855C19.782 16.9875 19.8279 16.972 19.8639 16.9419C21.0899 15.8968 22.1524 14.6739 23.0157 13.3137Z"
              fill="#3F117D"
            />
            <path
              d="M12 16.9995C11.3188 16.9995 10.6465 16.8449 10.0337 16.5473C9.42094 16.2496 8.88375 15.8168 8.46263 15.2813C8.04151 14.7459 7.74745 14.1218 7.60262 13.4562C7.45779 12.7905 7.46598 12.1007 7.62656 11.4387C7.63452 11.4072 7.63417 11.3742 7.62555 11.3429C7.61692 11.3116 7.60031 11.283 7.57734 11.2601L4.44422 8.12555C4.41099 8.09229 4.36649 8.07272 4.31952 8.07073C4.27255 8.06873 4.22655 8.08445 4.19062 8.11477C3.04734 9.09024 1.9875 10.2771 1.01859 11.6641C0.84899 11.9076 0.755584 12.1959 0.750243 12.4926C0.744901 12.7892 0.827865 13.0807 0.988591 13.3301C2.22656 15.2674 3.81937 16.8991 5.59547 18.0481C7.59656 19.3432 9.74625 19.9995 11.985 19.9995C13.1412 19.9964 14.2899 19.8137 15.39 19.4581C15.4206 19.4483 15.4482 19.4308 15.4702 19.4072C15.4921 19.3837 15.5076 19.3549 15.5152 19.3236C15.5227 19.2924 15.5222 19.2597 15.5134 19.2287C15.5047 19.1977 15.4882 19.1695 15.4655 19.1468L13.2403 16.9221C13.2174 16.8991 13.1888 16.8825 13.1575 16.8739C13.1262 16.8653 13.0932 16.8649 13.0617 16.8729C12.7141 16.9571 12.3577 16.9996 12 16.9995V16.9995Z"
              fill="#3F117D"
            />
          </svg>
        ) : icon === 1 ? (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.25 9.5H16.5V5.75C16.5 4.55653 16.0259 3.41193 15.182 2.56802C14.3381 1.72411 13.1935 1.25 12 1.25C10.8065 1.25 9.66193 1.72411 8.81802 2.56802C7.97411 3.41193 7.5 4.55653 7.5 5.75V9.5H6.75C5.95462 9.50087 5.19206 9.81722 4.62964 10.3796C4.06722 10.9421 3.75087 11.7046 3.75 12.5V20.75C3.75087 21.5454 4.06722 22.3079 4.62964 22.8704C5.19206 23.4328 5.95462 23.7491 6.75 23.75H17.25C18.0454 23.7491 18.8079 23.4328 19.3704 22.8704C19.9328 22.3079 20.2491 21.5454 20.25 20.75V12.5C20.2491 11.7046 19.9328 10.9421 19.3704 10.3796C18.8079 9.81722 18.0454 9.50087 17.25 9.5V9.5ZM15 9.5H9V5.75C9 4.95435 9.31607 4.19129 9.87868 3.62868C10.4413 3.06607 11.2044 2.75 12 2.75C12.7956 2.75 13.5587 3.06607 14.1213 3.62868C14.6839 4.19129 15 4.95435 15 5.75V9.5Z"
              fill="#3F117D"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1644 3.05322C12.4896 2.52692 11.5106 2.52693 10.837 3.05476C9.2819 4.27336 7.385 5.07837 5.31638 5.30368C4.60853 5.38077 3.98383 5.86775 3.89103 6.57371C3.798 7.28144 3.75 8.00331 3.75 8.73638C3.75 14.522 6.73981 19.6106 11.2616 22.5476C11.711 22.8394 12.289 22.8394 12.7384 22.5476C17.2602 19.6106 20.25 14.522 20.25 8.73638C20.25 8.00331 20.202 7.28144 20.109 6.57371C20.0162 5.86775 19.3915 5.38069 18.6838 5.30173C16.6753 5.07764 14.7546 4.29356 13.1644 3.05322ZM12 21.2382C16.0706 18.558 18.75 13.9584 18.75 8.73638C18.75 8.08876 18.7089 7.45144 18.6292 6.82674C18.6227 6.82305 18.6148 6.81904 18.6053 6.81502C18.5805 6.80449 18.5505 6.79616 18.5175 6.79248C16.2328 6.53757 14.0504 5.64659 12.2418 4.236C12.1752 4.18401 12.0874 4.15842 12 4.15869L12 12.6984L12 21.2382Z"
              fill="#3F117D"
            />
          </svg>
        )}
      </span>
      <div>
        <div style={styles.infoTitle}>{title}</div>
        <div style={styles.infoDescription}>{description}</div>
      </div>
    </div>
  );
}

// Inline CSS for simplicity
const styles = {
  container: {
    width: 370,
    background: "#fff",
    borderRadius: 20,
    padding: 32,
    margin: "40px auto",
    position: "relative",
    boxShadow: "0 2px 18px #eee",
    fontFamily: "Inter, Arial, sans-serif",
  },
  closeButton: {
    position: "absolute",
    top: 24,
    right: 24,
    background: "none",
    border: "none",
    fontSize: 26,
    cursor: "pointer",
    color: "#9ca3af",
  },
  heading: {
    textAlign: "center",
    margin: "8px 0 10px",
    fontSize: 28,
    fontWeight: 600,
    color: "#1c1c1c",
  },
  description: {
    textAlign: "center",
    color: "#555",
    fontSize: 16,
    marginBottom: 30,
  },
  progressContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
    gap: 50,
  },
  iconStep: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  plusIcon: {
    width: 48,
    height: 48,
    background: "#1c1c1c",
    color: "#fff",
    borderRadius: 12,
    fontSize: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  progressCircle: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "conic-gradient(#6c45ff 270deg, #d1c7fc 0deg)",
    display: "inline-block",
  },
  nbfcBadge: {
    background: "#f7f8fa",
    borderRadius: 10,
    minWidth: 76,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#abb2ba",
    fontSize: 15,
    textAlign: "center",
  },
  infoSection: {
    marginTop: 14,
    marginBottom: 20,
  },
  infoItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 12,
  },
  infoIcon: {
    fontSize: 22,
    minWidth: 30,
  },
  infoTitle: {
    fontWeight: 600,
    fontSize: 17,
    color: "#2a204f",
  },
  infoDescription: {
    fontSize: 14.5,
    color: "#8e8e8e",
  },
  continueButton: {
    background: "#3f117d",
    border: "none",
    color: "#fff",
    padding: "14px 0",
    fontSize: 18,
    borderRadius: 7,
    width: "100%",
    marginTop: 12,
    cursor: "pointer",
    fontWeight: 600,
  },
  poweredBy: {
    textAlign: "center",
    color: "black",
    marginTop: 24,
    fontSize: 14,
  },
  logo: {
    fontWeight: 700,
    marginLeft: 6,
  },
};

export default LinkAccount;
