import React from "react";
import styled from "styled-components";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

const StyledTypography = styled.p``;

const WEIGHTS_FOR_VARIANT = {};

interface TypographyProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: number;
  color?: string;
  padding?: number | string;
  margin?: number | string;
  textAlign?: "start" | "end" | "left" | "right" | "center" | "justify";
  unit?: "vh" | "rem";
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  size = 1.4,
  children,
  color = "white",
  unit = "rem",
  padding,
  margin,
  textAlign = "start",
  fontWeight,
}) => {
  let fontWeightToSet = fontWeight;
  if (!fontWeightToSet) {
  }

  return (
    <StyledTypography
      as={variant}
      style={{
        fontSize: `${size}${unit}`,
        color,
        padding,
        margin,
        textAlign,
        fontWeight: fontWeightToSet,
      }}
    >
      {children}
    </StyledTypography>
  );
};
