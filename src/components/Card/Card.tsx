import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`
  background: #2c3a47;
  margin-bottom: 30px;
`;

const Heading = styled.h2`
  background: #314150;
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;
  color: #fff;
  padding: 10px;
`;

interface CardProps {
  children: React.ReactNode;
  heading?: string;
}

export const Card: React.FC<CardProps> = ({ children, heading }) => {
  return (
    <StyledCard>
      {heading && <Heading>{heading}</Heading>}
      <div style={{ padding: 20 }}>{children}</div>
    </StyledCard>
  );
};
