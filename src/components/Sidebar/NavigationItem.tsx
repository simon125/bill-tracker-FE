import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const IconWrapper = styled.span`
  display: inline-block;
  width: 6vh;
  height: 6vh;
  background: red;
`;

const StyledLink = styled(Link)<{ isActive: boolean }>`
  width: 100%;
  height: calc(100% / 6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #1d212a;
  background: ${({ isActive }) => (isActive ? "#1d212a" : "")};
  transition: all 0.15s;

  &:hover {
    background: #1d212a;
  }
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

  console.log({ pathname, path });
  return (
    <StyledLink onClick={action} to={path} isActive={pathname === `/${path}`}>
      <IconWrapper
        style={{
          background: bgColor,
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <img
          src={`/icons/${iconName}`}
          alt={label}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      </IconWrapper>
      <span
        style={{
          display: "inline-block",
          margin: "0 auto",
          marginTop: 8,
          fontSize: "1.2rem",
          letterSpacing: 0.4,
          color: "#ededed",
        }}
      >
        {label}
      </span>
    </StyledLink>
  );
};
