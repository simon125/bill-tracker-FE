import React from "react";
import styled from "styled-components";

import { ANCHORS_CONFIG } from "../landingPageAnchorsConfigs";

const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  position: relative;
  z-index: 100;
`;

const NavItem = styled.li`
  width: 150px;
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: #eee;
  cursor: pointer;
  letter-spacing: 1px;
  display: inline-block;
  text-align: right;
  margin-left: auto;

  &:hover {
    font-weight: bolder;
  }
`;

export const NavigationDesktop: React.FC<{ activeNavLink: number }> = ({
  activeNavLink = 0,
}) => {
  // const [activeLinkItem, setActiveLinkItem] = React.useState(0);

  const handleLinkClick = (href: string) => {
    // TODO: DRY: to utils
    // setActiveLinkItem(index);
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

  return (
    <nav>
      <NavItems>
        {ANCHORS_CONFIG.map((el) => (
          <NavItem key={el.id}>
            <NavLink role="" onClick={() => handleLinkClick(el.id)}>
              {el.label}
            </NavLink>
          </NavItem>
        ))}
        <span
          style={{
            position: "absolute",
            width: [45, 68, 45, 60][activeNavLink],
            borderBottom: "1px solid #34b2b4",
            top: "23px",
            left: "105px",
            transform: `translateX(${[0, 128, 300, 435][activeNavLink]}px)`, // TODO: move these values
            transition: "all 0.3s",
          }}
        ></span>
      </NavItems>
    </nav>
  );
};
