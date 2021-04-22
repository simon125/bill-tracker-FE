import React, { useState } from "react";
import styled from "styled-components";

import { ANCHORS_CONFIG } from "../landingPageAnchorsConfigs";
import shortLogo from "assets/logo/short-logo.svg";
import { HamburgerButton } from "components";
import { MobileHero } from "types";

interface StyledNavigationMenuProps {
  open: boolean;
}

const NavigationMenu = styled.nav<StyledNavigationMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #1d212a;
  z-index: 100;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.2s ease-in-out;
`;

const MenuItems = styled.ul`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.li`
  font-size: 5vh;
  margin-bottom: 3vh;
`;

const MenuItemWithBorder = styled(MenuItem)`
  border: 2px solid white;
  border-radius: 1px;
`;

export const NavigationMobile: React.FC<{
  setMobileHero: (mobileHero: MobileHero) => void;
  mobileHero: MobileHero;
}> = ({ setMobileHero, mobileHero }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMenu((prev) => !prev);
    document.body.style.overflowY = openMenu ? "" : "hidden";
  };

  const handleLinkClick = (href: string) => {
    handleHamburgerClick();
    setTimeout(() => {
      const section = document.getElementById(href);
      const yOffset = -100;
      if (section) {
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
  };

  const handleSignInClick = () => {
    handleHamburgerClick();
    setMobileHero(MobileHero.SIGN_IN);
    console.log(MobileHero.SIGN_IN);
    setTimeout(() => {
      const y = 0;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 300);
  };

  const handleSignUpClick = () => {
    handleHamburgerClick();
    setMobileHero(MobileHero.SIGN_UP);
    console.log(MobileHero.SIGN_UP);

    setTimeout(() => {
      const y = 0;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 300);
  };

  const handleShowCaseClick = () => {
    handleHamburgerClick();
    setMobileHero(MobileHero.SHOWCASE);
    setTimeout(() => {
      const y = 0;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <HamburgerButton open={openMenu} handleClick={handleHamburgerClick} />
      <NavigationMenu open={openMenu}>
        <img
          src={shortLogo}
          alt="Shorten brand"
          style={{ margin: "25px 0 0 25px" }}
        />
        <MenuItems>
          {ANCHORS_CONFIG.map(({ label, id }) => {
            return (
              <button
                onClick={() => handleLinkClick(id)}
                key={label}
                style={{
                  textDecoration: "none",
                  border: "none",
                  background: "transparent",
                }}
              >
                <MenuItem style={{ color: "white" }}>{label}</MenuItem>
              </button>
            );
          })}
          {mobileHero === MobileHero.SHOWCASE ? (
            <>
              <MenuItemWithBorder onClick={handleSignInClick}>
                Sign In
              </MenuItemWithBorder>
              <MenuItemWithBorder onClick={handleSignUpClick}>
                Sign Up
              </MenuItemWithBorder>
            </>
          ) : (
            <MenuItemWithBorder onClick={handleShowCaseClick}>
              Showcase
            </MenuItemWithBorder>
          )}
        </MenuItems>
      </NavigationMenu>
    </>
  );
};
