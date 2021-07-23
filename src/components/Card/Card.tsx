import React from "react";
import { Space, space } from "style/spacing";
import styled from "styled-components";

const StyledCard = styled.section<Space>`
  background: #2c3a47;
  margin-bottom: 30px;
  width: 100%;

  ${space}
`;

const Heading = styled.h2`
  background: #314150;
  font-size: 1.8rem;
  font-weight: 400;
  text-align: center;
  color: #fff;
  padding: 10px;
`;

interface CardProps extends Space {
  children: React.ReactNode;
  heading?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  heading,
  style,
  ...rest
}) => {
  return (
    <StyledCard style={style} {...rest}>
      {heading && <Heading>{heading}</Heading>}
      <div style={{ padding: 20 }}>{children}</div>
    </StyledCard>
  );
};
