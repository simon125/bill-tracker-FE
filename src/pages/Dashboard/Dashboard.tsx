import React from "react";
import styled from "styled-components";

import { X_LARGE_SCREEN } from "style/rwdBreakboints";
import { ExpenseTypeChart } from "./components/ExpenseTypeChart";

import { LastMonthCalendarExpenses } from "./components/LastMonthCalendarExpenses";
import { LastMonthTable } from "./components/LastMonthTable";
import { Metrics } from "./components/Metrics";

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* margin-bottom: 10px; */

  @media screen and (min-width: ${X_LARGE_SCREEN}) {
    margin-bottom: 30px;
    flex-direction: row;
    /* height: 800px; */
    align-items: stretch;
    /* background: red; */
    /* align-items: baseline; */
    /* align-items: center; */
    /* margin-bottom: 20px; */
  }
`;

const FlexItem = styled.div`
  width: 100%;

  /* height: 40vh; */
  /* height: 100%; */

  @media screen and (min-width: 1200px) {
    width: 49%;
  }
`;

export const Dashboard: React.FC = () => {
  return (
    <>
      <Metrics />
      <FlexRow>
        <FlexItem>
          <LastMonthCalendarExpenses />
        </FlexItem>
        <FlexItem>
          <ExpenseTypeChart />
        </FlexItem>
      </FlexRow>
      <LastMonthTable />
    </>
  );
};
