import React from "react";
import img from "../img/Greattr.png";
function PoweredBy() {
  return (
    <div style={styles.poweredBy}>
      <span>Powered by</span>
      <img src={img} alt="Greattr" style={styles.logo} />
    </div>
  );
}
// Inline CSS for simplicity
const styles = {
  poweredBy: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "black",
    fontWeight: "700",
    marginTop: 16,
    fontSize: 14,
  },
  logo: {
    fontWeight: 700,
    marginLeft: 6,
  },
};

export default PoweredBy;
