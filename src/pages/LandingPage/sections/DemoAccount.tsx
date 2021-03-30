import React from "react";
import { Typography } from "../../../components/Typography/Typography";
import { Feature } from "./Feature";

export const DemoAccount: React.FC = () => {
  return (
    <Feature
      greyBg
      leftColumn={
        <div data-aos="fade-right" data-aos-offset="150">
          <img
            src="/images/computer.png"
            alt=""
            style={{ width: "90vw", display: "block", margin: "20px auto" }}
          />
        </div>
      }
      rightColumn={
        <div data-aos="fade-left" data-aos-offset="150">
          <Typography
            margin="0 0 10px 0"
            textAlign="center"
            variant="h2"
            color="#1A212F"
            size={4.3}
            unit="vh"
          >
            Demo account!
          </Typography>
          <Typography
            margin="0 0 20px 0"
            textAlign="center"
            variant="p"
            color="#888888"
            size={2.7}
            unit="vh"
          >
            Do you want see app in action? Let's try it with demo account! It's
            completely free!
          </Typography>
          <Typography
            margin="0 0 20px 0"
            textAlign="center"
            variant="p"
            color="#888888"
            size={2.7}
            unit="vh"
          >
            Tables, charts and possibilities to customization - isn't that seems
            like excel? Bill Tracker contains aligned tools to show you stats
            and even more, and it's still customizable.
          </Typography>
          <button
            style={{
              whiteSpace: "nowrap",
              color: "#1A212F",
              background: "transparent",
              border: "#1A212F 1px solid",
              borderRadius: 0,
              padding: "15px 30px",
              fontWeight: 900,
              fontSize: "1.2rem",
              display: "block",
              margin: "0 auto 30px auto",
            }}
          >
            TRY OUT DEMO ACCOUNT
          </button>
        </div>
      }
    />
  );
};
