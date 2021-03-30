import React from "react";
import styled from "styled-components";

interface StyledColProps {
  xs: number;
  sm: number;
  md: number;
  lg: number;
}

const StyledCol = styled.div<StyledColProps>`
  /* width: 100%;

  @media (min-width: 540px) { */
  width: calc(100% * (${({ xs }) => xs} / 12));
  /* } */

  @media (min-width: 768px) {
    width: calc(100% * (${({ sm }) => sm} / 12));
  }

  @media (min-width: 992px) {
    width: calc(100% * (${({ md }) => md} / 12));
  }

  @media (min-width: 1200px) {
    width: calc(100% * (${({ lg }) => lg} / 12));
  }
`;

type ColAmount =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

interface ColProps {
  children: React.ReactNode;
  xs?: ColAmount;
  sm?: ColAmount;
  md?: ColAmount;
  lg?: ColAmount;
  style?: React.CSSProperties;
}

export const Col: React.FC<ColProps> = ({
  children,
  xs = "12",
  sm = xs,
  md = sm,
  lg = md,
  style,
}) => {
  return (
    <StyledCol
      xs={parseInt(xs)}
      sm={parseInt(sm)}
      md={parseInt(md)}
      lg={parseInt(lg)}
      style={style}
    >
      {children}
    </StyledCol>
  );
};
