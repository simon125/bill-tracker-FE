import React from "react";
import logoImage from "../../../assets/logo/footer-logo.svg";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: "#1A212F",
        width: "100vw",
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1rem",
        color: "white",
      }}
    >
      <img src={logoImage} alt="footer brand" style={{ marginRight: 3 }} /> Bill
      tracker ©2021 Created with 💻 by Szymon Oleszek
    </footer>
  );
};
