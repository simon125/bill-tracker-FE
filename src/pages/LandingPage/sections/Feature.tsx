import React from "react";
import styled from "styled-components";
// import { Col, Container, Row } from "../../../components/Layout";

const SectionContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  max-width: 1400px;
  min-height: 60vh;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 10vh;
  flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 992px) {
    text-align: left;
    padding: 10vh 5vw;
  }
`;

interface FeatureProps {
  reverse?: boolean;
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  greyBg?: boolean;
}

export const Feature: React.FC<FeatureProps> = ({
  reverse = false,
  leftColumn,
  rightColumn,
  greyBg,
}) => {
  return (
    <div
      style={{
        background: greyBg ? "rgba(237, 237, 237, 0.9)" : "white",
      }}
    >
      {/* <Container>
        <Row reverse={reverse} horizonal="center" vertical="center"> */}
      <SectionContainer reverse={reverse}>
        <div style={{ flexBasis: "47%" }}>{leftColumn}</div>
        <div style={{ flexBasis: "47%" }}>{rightColumn}</div>
      </SectionContainer>
      {/* </Row>
      </Container> */}
    </div>
  );
};
