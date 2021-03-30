import React from "react";
import { Col, Container, Row } from "../../../components/Layout";
import { Typography } from "../../../components/Typography/Typography";

export const Intro: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div data-aos="fade-right">
            <Typography
              variant="h2"
              color="#1A212F"
              unit="vh"
              size={4}
              textAlign="center"
              margin="0 0 10px 0"
            >
              <span className="text-bold">Tracking expenses</span> have never
              been such <span className="text-bold">easy</span> like now{" "}
              <span className="text-bold">with our app!</span>
            </Typography>
          </div>
          <div data-aos="fade-left">
            <Typography
              variant="p"
              unit="vh"
              size={3}
              textAlign="center"
              color="#2C3A47"
              margin="0 0 10px 0"
            >
              These features provide you everything what you need to track your
              money
            </Typography>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
