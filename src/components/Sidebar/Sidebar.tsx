import { useMobileNavigation } from "contexts/MobileAppNavigation";
import useWindowDimensions from "hooks/useWindowDimensions";
import React from "react";
import styled from "styled-components";
import { Navigation } from "./Navigation";
import { SMALL_SCREEN } from "style/rwdBreakboints";

interface AsideProps {
  isOpen: boolean;
}

const Aside = styled.aside<AsideProps>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: -100;
  background: #2c3a47;
  height: 100%;
  transition: all 0.4s;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};

  @media screen and (min-width: ${SMALL_SCREEN}) {
    top: 70px;
    height: calc(100% - 70px);
    width: 150px;
  }
`;

const NavigationBackground = styled.div<AsideProps>`
  position: fixed;
  top: -100px;
  left: -100px;
  right: -100px;
  bottom: -100px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

export const Sidebar: React.FC = () => {
  const { isMobileNavOpen, setMobileNavigationState } = useMobileNavigation();
  const { isMobileDevice } = useWindowDimensions();

  const isOpen =
    isMobileDevice === false || (isMobileDevice && isMobileNavOpen);

  return (
    <>
      <Aside isOpen={isOpen}>
        <Navigation />
      </Aside>
      {isMobileDevice !== false && (
        <NavigationBackground
          onClick={() => setMobileNavigationState(false)}
          isOpen={isOpen}
        />
      )}
    </>
  );
};
