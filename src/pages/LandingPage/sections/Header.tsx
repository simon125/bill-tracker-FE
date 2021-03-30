import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logo/logo-mobile.svg";
import { Col, Row } from "../../../components/Layout";
import { MobileHero } from "../../../types";
import { NavigationDesktop } from "../components";
import { NavigationMobile } from "../components/NavigationMobile";

const HeaderBackground = styled.div<{ isScrolled: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #1d212a;
  top: 0;
  left: 0;
  transition: transform 0.2s;

  transform: ${({ isScrolled }) =>
    isScrolled ? "translateY(0)" : "translateY(-100%)"};
`;

export const Header: React.FC<{
  isScrolledDown: boolean;
  mobileHero: MobileHero;
  setMobileHero: (mobileHero: MobileHero) => void;
}> = ({ isScrolledDown, setMobileHero, mobileHero }) => {
  return (
    <header
      style={{
        maxHeight: 85,
        position: "fixed",
        zIndex: 100,
        width: "100%",
        padding: "15px 20px 10px 20px",
      }}
    >
      <HeaderBackground isScrolled={isScrolledDown} />
      <Row horizonal="between" vertical="stretch">
        <Col xs="10" md="3">
          <img
            src={logo}
            alt="Brand of bill tracker"
            style={{ position: "relative" }}
          />
        </Col>
        <Col xs="2" md="9">
          {window.innerWidth < 992 ? (
            <NavigationMobile
              setMobileHero={setMobileHero}
              mobileHero={mobileHero}
            />
          ) : (
            <NavigationDesktop />
          )}
        </Col>
      </Row>
    </header>
  );
};
