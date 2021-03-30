import React from "react";
import styled from "styled-components";

interface StyledRowProps {
  reverse: boolean;
  horizotnal: string;
  vertical: string;
  noWrap: boolean;
}

const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: ${({ horizotnal }) => horizotnal};
  align-items: ${({ vertical }) => vertical};
  flex-wrap: ${({ noWrap }) => (noWrap ? "nowrap" : "wrap")};

  flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "row")};
`;

const COMMON_VALUES = {
  start: "start",
  center: "center",
  end: "flex-end",
  normal: "normal",
};

const HORIZONTAL_ALIGN = {
  ...COMMON_VALUES,
  between: "space-between",
  around: "space-around",
};

const VERTICAL_ALIGN = {
  ...COMMON_VALUES,
  baseline: "baseline",
  stretch: "stretch",
};

interface RowProps {
  horizonal?: keyof typeof HORIZONTAL_ALIGN;
  vertical?: keyof typeof VERTICAL_ALIGN;
  noWrap?: boolean;
  reverse?: boolean;
  children: React.ReactNode;
}

export const Row: React.FC<RowProps> = ({
  horizonal = "normal",
  vertical = "normal",
  children,
  reverse = false,
  noWrap = false,
}) => {
  return (
    <StyledRow
      noWrap={noWrap as boolean}
      reverse={reverse}
      horizotnal={HORIZONTAL_ALIGN[horizonal]}
      vertical={VERTICAL_ALIGN[vertical]}
    >
      {children}
    </StyledRow>
  );
};
