import React from "react";
import styled from "styled-components";

const Indicator = styled.div`
  animation: bounce 1s ease infinite;
  color: #fff;
  opacity: 0.8;
  text-align: center;

  @keyframes bounce {
    50% {
      transform: translateY(-50%);
    }
  }
`;

export const ScrollDownIndicator: React.FC = () => {
  return <Indicator>╲╱</Indicator>;
};
