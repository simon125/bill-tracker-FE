import React from "react";
import { SMALL_SCREEN } from "style/rwdBreakboints";
import styled from "styled-components";

const Heading = styled.h1`
  width: 100px;
  height: 100%;
  background: #2fb5b6;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${SMALL_SCREEN}) {
    width: 150px;
  }
`;

export const Logo: React.FC = () => {
  return (
    <Heading>
      <img
        style={{ display: "block", marginLeft: -5 }}
        src="/images/logo-lg.svg"
        alt="application logo"
      />
    </Heading>
  );
};
