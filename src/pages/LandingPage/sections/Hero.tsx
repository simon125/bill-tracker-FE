import React from "react";
import styled from "styled-components";

import { Col, Container, Row } from "../../../components/Layout";
import { Typography } from "../../../components/Typography/Typography";
import { MobileHero } from "../../../types";
import { ScrollDownIndicator, SignUpInForm } from "../components";

const ImageBackground = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const HeroContent = styled.div`
  position: relative;
  height: 100vh;
  background-color: rgba(26, 33, 47, 0.92);
  display: flex;
`;

export const Hero: React.FC<{
  isScrolledDown: boolean;
  mobileHero: MobileHero;
}> = ({ isScrolledDown, mobileHero }) => {
  return (
    <>
      <ImageBackground src="/hero-valid.webp" alt="Hero section" />
      <HeroContent>
        <Container>
          <Row horizonal="between" vertical="start">
            <Col
              xs="10"
              md="7"
              style={{
                paddingTop: 150, // todo: to uncomment and set to 100 for mobile
                // display: mobileHero === MobileHero.SHOWCASE ? "block" : "none",
              }}
            >
              <div data-aos="fade-right">
                <Typography
                  variant="h1"
                  size={6}
                  unit="vh"
                  margin={"0 0 20px 0"}
                  // textAlign="center"
                  textAlign="left"
                >
                  Track your money!
                </Typography>
              </div>
              <div data-aos="fade-left">
                <Typography
                  size={5}
                  unit="vh"
                  margin={"0 0 40px 0"}
                  // textAlign="center"
                  textAlign="left"
                >
                  <span className="color-blue">Finally</span> you will know on
                  what and how
                  <span className="color-blue"> much </span>
                  you spend
                  <span className="color-blue"> money </span>
                </Typography>
              </div>
              <div data-aos="fade-right">
                <button
                  style={{
                    whiteSpace: "nowrap",
                    color: "#1A212F",
                    background: "white",
                    border: "none",
                    borderRadius: 0,
                    padding: "15px 30px",
                    fontWeight: 900,
                    fontSize: "1.2rem",
                    display: "block",
                    // margin: "0 auto",
                  }}
                >
                  TRY OUT DEMO ACCOUNT
                </button>
              </div>
            </Col>
            <Col
              xs="10"
              md="4"
              style={{
                // display: mobileHero !== MobileHero.SHOWCASE ? "block" : "none",
                paddingTop: 130,
              }}
            >
              <SignUpInForm />
            </Col>
          </Row>
        </Container>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "12vh",
            transition: "all 0.4s",
            opacity: isScrolledDown ? "0" : "1",
          }}
        >
          <ScrollDownIndicator />
        </div>
      </HeroContent>
    </>
  );
};
