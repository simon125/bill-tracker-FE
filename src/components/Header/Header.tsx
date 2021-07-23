import { HamburgerButton } from "components";
import { useMobileNavigation } from "contexts/MobileAppNavigation";
import useWindowDimensions from "hooks/useWindowDimensions";
import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { useLocation } from "react-router-dom";
import { ReactComponent as Icons } from "./Icon.svg";

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background: #ededed;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageName = styled.h2`
  color: #2c3a47;
`;

const HAMBURGER_BTN_STYLE: React.CSSProperties = {
  margin: "0 10px 10px 0",
  position: "relative",
  zIndex: 10000,
};

const PAGE_NAME = {
  "/dashboard": "Dashboard",
  "/add-expense": "Expense Wizard",
  "/expenses": "Expenses",
  "/statistics": "Statistics",
  "/expense-types": "Expense types",
};

type PageNameKeys = keyof typeof PAGE_NAME;

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { isMobileNavOpen, setMobileNavigationState } = useMobileNavigation();
  const { isMobileDevice } = useWindowDimensions();

  const handleHamburgerBtnClick = () => {
    setMobileNavigationState(!isMobileNavOpen);
  };

  return (
    <HeaderContainer>
      <Logo />
      {/* <Icons style={{ transform: "scale(0.75)" }} /> */}
      {isMobileDevice && (
        <>
          <PageName>{PAGE_NAME[pathname as PageNameKeys]}</PageName>
          <HamburgerButton
            style={HAMBURGER_BTN_STYLE}
            color={"#2C3A47"}
            handleClick={handleHamburgerBtnClick}
            open={isMobileNavOpen}
          />
        </>
      )}
    </HeaderContainer>
  );
};
