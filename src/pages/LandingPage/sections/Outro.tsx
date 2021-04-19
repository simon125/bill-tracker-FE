import React from "react";
import { Typography } from "components/Typography/Typography";

export const Outro: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div data-aos="fade-left" data-aos-offset="150">
        <Typography
          variant="h2"
          color="#1A212F"
          unit="vh"
          size={4}
          textAlign="center"
          margin="40px 0 30px 0"
        >
          It's Not About How Much Money You Make, It's How You Control It!
        </Typography>
      </div>
      <div data-aos="fade-right" data-aos-offset="150">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            whiteSpace: "nowrap",
            color: "white",
            background: "#1A212F",
            border: "none",
            borderRadius: 0,
            padding: "15px 30px",
            fontWeight: 700,
            fontSize: "1.2rem",
            display: "block",
            margin: "0 auto 40px auto",
          }}
        >
          CREATE FREE ACCOUNT
        </button>
      </div>
    </div>
  );
};
