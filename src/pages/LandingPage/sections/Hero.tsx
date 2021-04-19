import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { MobileHero } from "types";
import { ScrollDownIndicator, SignUpInForm } from "../components";

const ImageBackground = styled.img`
  object-fit: cover;
  width: 100vw;
  min-height: 100%;
  height: 100vh;
  /* height: 100%; */
  position: absolute;
`;

const HeroContainer = styled.div`
  position: relative;
  /* z-index: 100000; */
  height: 100vh;
  width: 100vw;
  min-height: 100%;
  min-width: 100vw;
  /* height: 100%; */
  background-color: rgba(26, 33, 47, 0.92);
`;

const FlexContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;

  justify-content: center;
  align-items: top;
  flex-wrap: wrap;
  padding: 5px;

  /* background: red; */
  @media screen and (min-width: 992px) {
    margin: 0 auto;
    justify-content: space-between;
    /* align-items: center; */
    padding: 25px 50px;
  }

  @media screen and (min-width: 1400px) {
    margin: 0 auto;
    max-width: 1400px;
  }
`;

const FlexCol = styled.div`
  flex-basis: 95%;
  padding-top: 20vh;
  @media screen and (min-width: 992px) {
    padding-top: 25vh;
    flex-basis: 40%;
  }
`;

const H1 = styled.h1`
  text-align: center;
  color: #eee;
  font-size: 5.5vh;
  margin-bottom: 6vh;
  letter-spacing: 1px;

  @media screen and (min-width: 768px) {
    font-size: 6.5vh; //vh vw for ipad pro
  }

  @media screen and (min-width: 1024px) and (min-height: 1300px) {
    font-size: 6.5vw; //vh vw for ipad pro
  }

  @media screen and (min-width: 992px) {
    text-align: left;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  color: #eee;
  font-size: 3.5vh;
  margin-bottom: 6vh;
  letter-spacing: 1px;

  @media screen and (min-width: 768px) {
    font-size: 4.5vh; //vh vw for ipad pro
  }

  @media screen and (min-width: 1024px) and (min-height: 1300px) {
    font-size: 4.5vw; //vh vw for ipad pro
  }

  @media screen and (min-width: 992px) {
    text-align: left;
  }
`;

export const Hero: React.FC<{
  isScrolledDown: boolean;
  mobileHero: MobileHero;
}> = ({ isScrolledDown, mobileHero }) => {
  const history = useHistory();

  return (
    <>
      <ImageBackground src="/hero-valid.webp" alt="Hero section" />
      <HeroContainer>
        <FlexContainer>
          <FlexCol
            style={{
              flexBasis: window.innerWidth > 992 ? "50%" : "90%", // todo add this for desktop
              display:
                window.innerWidth > 992 ||
                (window.innerWidth < 992 && mobileHero === MobileHero.SHOWCASE)
                  ? "block"
                  : "none",
            }}
          >
            <div data-aos="fade-right">
              <H1>Track your money!</H1>
              <Paragraph>
                <span className="color-blue">Finally</span> you will know on
                what and how
                <span className="color-blue"> much </span>
                you spend
                <span className="color-blue"> money </span>
              </Paragraph>

              <button
                onClick={() => history.push("/dashboard")}
                style={{
                  whiteSpace: "nowrap",
                  color: "#1A212F",
                  background: "white",
                  border: "none",
                  borderRadius: 0,
                  padding: window.innerWidth > 992 ? "15px 30px" : "18px 35px",
                  fontWeight: 700,
                  fontSize: window.innerWidth > 992 ? "1.2rem" : "1.4rem",
                  display: "block",
                  margin: window.innerWidth > 992 ? "0" : "0 auto",
                }}
              >
                TRY OUT DEMO ACCOUNT
              </button>
            </div>
          </FlexCol>
          <FlexCol
            style={{
              display:
                window.innerWidth > 992 ||
                (window.innerWidth < 992 && mobileHero !== MobileHero.SHOWCASE)
                  ? "block"
                  : "none",
            }}
          >
            <SignUpInForm />
          </FlexCol>
        </FlexContainer>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: window.innerWidth > 992 ? "5vh" : "12vh",
            transition: "all 0.4s",
            opacity: isScrolledDown ? "0" : "1",
          }}
        >
          <ScrollDownIndicator />
        </div>
      </HeroContainer>
    </>
  );
};
