import React, { useState } from "react";
import {
  SMALL_SCREEN,
  MEDIUM_SCREEN,
  X_LARGE_SCREEN,
} from "style/rwdBreakboints";
import styled from "styled-components";
import { useCalendar } from "./useCalendar";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CalendarContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  width: 100%; // 90%

  @media screen and (min-width: ${MEDIUM_SCREEN}) {
    width: 90%;
  }

  /* @media screen and (min-width: ${X_LARGE_SCREEN}) {
    font-size: 3.5rem;
  } */
`;

const Day = styled.span`
  display: inline-block;
  height: 15px;
  width: calc(14% - 4px);
  margin: 8px 2px;
  border-radius: 50%;
  text-align: center;
  font-size: 1rem;

  @media screen and (min-width: ${X_LARGE_SCREEN}) {
    width: calc(14% - 10px); // 10px
    margin: 5px; // 5px
  }
`;

const CircleWrapper = styled.span<{ isBlank: boolean; border: string }>`
  display: inline-block;
  position: relative;
  width: calc(14% - 4px); // 10px
  margin: 2px; // 5px

  opacity: ${({ isBlank }) => (isBlank ? 0 : 1)};
  border: ${({ border }) => `2px solid ${border}`};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: ${({ border }) => `${border}44`};
  }

  @media screen and (min-width: ${X_LARGE_SCREEN}) {
    width: calc(14% - 10px); // 10px
    margin: 5px; // 5px
  }
`;

const Circle = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Spacer = styled.span`
  display: inline-block;
  margin-top: 90%;
`;

const Value = styled.span`
  display: inline-block;
  width: 86%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.6rem;

  @media screen and (min-width: ${SMALL_SCREEN}) {
    font-size: 1rem;
  }

  @media screen and (min-width: ${MEDIUM_SCREEN}) {
    font-size: 1.6rem;
  }
`;

const colors = ["#EF657C", "#1E768A", "#2FB5B6", "#84C2D7", "#eee"];

interface CalendarData {
  value: string | number;
  id: string;
}

interface CalendarProps {
  data: Array<CalendarData>;
  monthToDisplay?: string;
  onDayClick?: (payload: CalendarData) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  monthToDisplay,
  data,
  onDayClick,
}) => {
  const { blankDays, days } = useCalendar(monthToDisplay);
  const dataToDisplay = [...new Array(blankDays), ...data];

  const getValueToDisplay = (idx: number) => {
    return (
      (dataToDisplay && dataToDisplay[idx] && dataToDisplay[idx].value) || 0
    );
  };

  return (
    <>
      <CalendarContainer>
        {DAYS.map((day) => {
          return <Day key={day}>{day}</Day>;
        })}
        <br />
        {[...new Array(blankDays + days)].map((_, idx) => {
          const valueToDisplay = getValueToDisplay(idx);
          const color = colors[
            Math.floor(Math.random() * (4 - 0) + 0)
          ] as string;
          return (
            <React.Fragment key={idx}>
              <CircleWrapper
                title={valueToDisplay}
                onClick={() => onDayClick && onDayClick(dataToDisplay[idx])}
                isBlank={idx < blankDays}
                border={color}
              >
                <Circle>
                  <Value>{valueToDisplay}</Value>
                </Circle>
                <Spacer />
              </CircleWrapper>
              {(idx + 1) % 7 === 0 && <br />}
            </React.Fragment>
          );
        })}
      </CalendarContainer>
    </>
  );
};
