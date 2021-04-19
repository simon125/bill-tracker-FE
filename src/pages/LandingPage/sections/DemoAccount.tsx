import React from "react";
import { Typography } from "components/Typography/Typography";
import { Feature } from "./Feature";
import { ReactComponent as PlayArrow } from "../../../assets/logo/playArrow.svg";
import styled from "styled-components";

const PlayArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(200, 200, 200, 0.695);
  box-shadow: 1px 1px 65px 61px rgba(200, 200, 200, 0.695);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(220, 220, 220, 0.695);
    box-shadow: 1px 1px 65px 61px rgba(220, 220, 220, 0.695);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export const DemoAccount: React.FC<{ openModalWithDemo: () => void }> = ({
  openModalWithDemo,
}) => {
  return (
    <Feature
      greyBg
      leftColumn={
        <div
          className="dupa"
          data-aos="fade-right"
          data-aos-offset="150"
          style={{ position: "relative" }}
        >
          <img
            src="/images/computer.png"
            alt=""
            style={{
              width: window.innerWidth > 992 ? "80%" : "90vw",
              display: "block",
              margin: "20px auto",
            }}
          />
          <PlayArrowContainer tabIndex={1} onClick={openModalWithDemo}>
            <PlayArrow />
          </PlayArrowContainer>
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
            onClick={() => console.log(123333)}
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
