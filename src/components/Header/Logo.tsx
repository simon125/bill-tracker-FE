import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  width: 100px;
  background: #2fb5b6;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
