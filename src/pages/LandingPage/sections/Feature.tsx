import React from "react";
import { Col, Container, Row } from "../../../components/Layout";

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
    <div style={{ background: greyBg ? "rgba(237, 237, 237, 0.9)" : "white" }}>
      <Container>
        <Row reverse={reverse} horizonal="center" vertical="center">
          <Col xs="12" md="6">
            {leftColumn}
          </Col>
          <Col xs="12" md="6">
            {rightColumn}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
