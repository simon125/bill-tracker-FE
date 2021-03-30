import React from "react";
import { Col, Container, Row } from "../../../components/Layout";
import { Typography } from "../../../components/Typography/Typography";

export const Outro: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div data-aos="fade-left" data-aos-offset="150">
            <Typography
              variant="h2"
              color="#1A212F"
              unit="vh"
              size={4}
              textAlign="center"
              margin="40px 0 30px 0"
            >
              It's Not About How Much Money You Make, It's How You Control It!
            </Typography>
          </div>
          <div data-aos="fade-right" data-aos-offset="150">
            <button
              style={{
                whiteSpace: "nowrap",
                color: "white",
                background: "#1A212F",
                border: "none",
                borderRadius: 0,
                padding: "15px 30px",
                fontWeight: 900,
                fontSize: "1.2rem",
                display: "block",
                margin: "0 auto 40px auto",
              }}
            >
              CREATE FREE ACCOUNT
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
