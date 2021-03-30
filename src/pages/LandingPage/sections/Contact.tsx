import React from "react";
import styled from "styled-components";

import { Col, Row } from "../../../components/Layout";
import { Typography } from "../../../components/Typography/Typography";

const ImageBackground = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const ContactContent = styled.div`
  position: relative;
  height: 100vh;
  background-color: rgba(26, 33, 47, 0.92);
  display: flex;
`;

export const Contact: React.FC = () => {
  return (
    <section id="hero" style={{ position: "relative" }}>
      <ImageBackground src="/images/contact-image.webp" alt="Contact section" />
      <ContactContent>
        <Row horizonal="center" vertical="center">
          <Col xs="10" md="5">
            <Typography
              variant="p"
              size={2.5}
              unit="vh"
              margin={"0 0 10px 0"}
              textAlign="center"
            >
              If you are interested in contact with me you can do this by my
              socials or just send email by form!
            </Typography>
            <Typography
              size={2.5}
              unit="vh"
              margin={"0 0 10px 0"}
              textAlign="center"
            >
              Feel free to review app from technical perspective,I invite you to
              visit repo with Bill Tracker source code, report any ideas issues
              which can improve my app. I'll be grateful If you point me better
              practices.
            </Typography>
            <Typography
              size={2.5}
              unit="vh"
              margin={"0 0 10px 0"}
              textAlign="center"
            >
              Please notice that it is one person project, and this is kind of
              development sandbox but useful tool for me.
            </Typography>
          </Col>
        </Row>
      </ContactContent>
    </section>
  );
};
