import { useMobileNavigation } from "contexts/MobileAppNavigation";
import useWindowDimensions from "hooks/useWindowDimensions";
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { SMALL_SCREEN } from "style/rwdBreakboints";
import styled from "styled-components";

const IconWrapper = styled.span`
  display: inline-block;
  width: 6vh;
  height: 6vh;
  background: red;
  border-radius: 50%;
  position: relative;
`;

const StyledLink = styled(Link)<{ active: number }>`
  width: 100px;
  height: calc(
    100% / 6
  ); /* ATTENTION: if there is change in amount of navitems update height*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #1d212a;
  background: ${({ active }) => (active ? "#1d212a" : "")};
  transition: all 0.15s;

  @media screen and (min-width: ${SMALL_SCREEN}) {
    width: 150px;
  }

  &:hover {
    background: #1d212a;
  }
`;

const NavIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NavLabel = styled.span`
  display: inline-block;
  margin: 0 auto;
  margin-top: 8px;
  font-size: 1.2rem;
  letter-spacing: 0.4px;
  color: #ededed;
`;

interface NavItemProps {
  iconName: string;
  label: string;
  path: string;
  bgColor: string;
  action?: () => void;
}

export const NavigationItem: React.FC<NavItemProps> = ({
  iconName,
  label,
  path,
  bgColor,
  action,
}) => {
  const { pathname } = useLocation();
  const { isMobileNavOpen, setMobileNavigationState } = useMobileNavigation();
  const { isMobileDevice } = useWindowDimensions();

  const handleLinkClick = () => {
    if (action) {
      action();
    }

    if (isMobileDevice && isMobileNavOpen) {
      // setTimeout for ux purposes
      setTimeout(() => setMobileNavigationState(false), 150);
    }
  };

  return (
    <StyledLink
      onClick={handleLinkClick}
      to={path}
      active={pathname === `/${path}` ? 1 : 0}
    >
      <IconWrapper
        style={{
          background: bgColor,
        }}
      >
        <NavIcon src={`/icons/${iconName}`} alt={label} />
      </IconWrapper>
      <NavLabel>{label}</NavLabel>
    </StyledLink>
  );
};
