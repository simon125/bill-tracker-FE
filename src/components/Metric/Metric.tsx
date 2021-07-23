import React from "react";
import styled from "styled-components";
import {
  MEDIUM_SCREEN,
  SMALL_SCREEN,
  X_LARGE_SCREEN,
} from "style/rwdBreakboints";

const StyledMetric = styled.div`
  padding: 25px;
  background: #1e768a;
  width: 100%;

  @media screen and (min-width: ${SMALL_SCREEN}) {
    padding: 35px 25px;
  }
`;

const Value = styled.p`
  font-size: 2.4rem;
  /* font-size: 3rem; */

  white-space: nowrap;

  /* overflow: hidden;
  text-overflow: ellipsis; */

  @media screen and (min-width: ${SMALL_SCREEN}) {
    font-size: 3rem;
  }

  @media screen and (min-width: ${X_LARGE_SCREEN}) {
    font-size: 3.5rem;
  }
`;

const Label = styled.p`
  font-size: 1.2rem;
  white-space: nowrap;

  @media screen and (min-width: ${SMALL_SCREEN}) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${X_LARGE_SCREEN}) {
    font-size: 1.7rem;
  }
`;

interface MetricProps {
  value: string;
  label: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Metric: React.FC<MetricProps> = ({
  value,
  label,
  style,
  className,
}) => {
  return (
    <StyledMetric style={style} className={className}>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </StyledMetric>
  );
};
