import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logo/logo-mobile.svg";
import { MobileHero } from "types";
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

const FlexContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  justify-content: space-between;
  align-items: top;
  flex-wrap: wrap;
  padding: 25px;

  /* @media screen and (min-width: 768px) {
    padding: 50px;
  } */

  @media screen and (min-width: 992px) {
    padding: 25px 50px;
    align-items: center;

    margin: 0 auto;
  }

  @media screen and (min-width: 1400px) {
    margin: 0 auto;
    max-width: 1400px;
  }
`;

const FlexCol = styled.div`
  /* flex-basis: 40%; */
`;

export const Header: React.FC<{
  isScrolledDown: boolean;
  mobileHero: MobileHero;
  activeNavLink: number;
  setMobileHero: (mobileHero: MobileHero) => void;
}> = ({ isScrolledDown, setMobileHero, mobileHero, activeNavLink }) => {
  return (
    <header
      style={{
        maxHeight: 100,
        position: "fixed",
        zIndex: 100,
        width: "100%",
      }}
    >
      <HeaderBackground isScrolled={isScrolledDown} />
      <FlexContainer>
        <FlexCol>
          <img
            src={logo}
            alt="Brand of bill tracker"
            style={{ position: "relative" }}
          />
        </FlexCol>
        <FlexCol>
          {window.innerWidth < 992 ? (
            <NavigationMobile
              setMobileHero={setMobileHero}
              mobileHero={mobileHero}
            />
          ) : (
            <NavigationDesktop activeNavLink={activeNavLink} />
          )}
        </FlexCol>
      </FlexContainer>
    </header>
  );
};
