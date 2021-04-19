import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background: #ededed;
  position: fixed;
  top: 0;
  left: 0;

  @media screen and (min-width: 768px) {
    height: 100px;
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};
