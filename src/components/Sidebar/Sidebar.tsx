import React from "react";
import styled from "styled-components";
import { Navigation } from "./Navigation";

const Aside = styled.aside`
  position: fixed;
  top: 70px;
  left: 0;
  background: #2c3a47;
  height: calc(100% - 70px);

  @media screen and (min-width: 768px) {
    top: 100px;
    height: calc(100% - 100px);
    width: 150px;
  }
`;

export const Sidebar: React.FC = () => {
  return (
    <Aside>
      <Navigation />
    </Aside>
  );
};
