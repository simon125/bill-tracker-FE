import React from "react";
import { SMALL_SCREEN, X_LARGE_SCREEN } from "style/rwdBreakboints";
import styled from "styled-components";
import { Metric } from "components";

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledMetric = styled.div`
  width: calc(50% - 5px);
  margin-bottom: 10px;

  @media screen and (min-width: ${SMALL_SCREEN}) {
  }

  @media screen and (min-width: ${X_LARGE_SCREEN}) {
    width: 23.5%;
    margin-bottom: 30px;
  }
`;

export const Metrics = () => {
  return (
    <MetricsContainer>
      <StyledMetric>
        <Metric value="259,40 PLN" label="Total" />
      </StyledMetric>

      <StyledMetric>
        <Metric value="59,40 PLN" label="Most expensive" />
      </StyledMetric>

      <StyledMetric>
        <Metric value="9,40 PLN" label="The cheapest" />
      </StyledMetric>

      <StyledMetric>
        <Metric value="6" label="Total transfers" />
      </StyledMetric>
    </MetricsContainer>
  );
};
