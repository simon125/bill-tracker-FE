import React from "react";
import { Typography } from "../../../components/Typography/Typography";
import { Feature } from "./Feature";

export const Features = () => {
  return (
    <>
      <Feature
        greyBg
        leftColumn={
          <div data-aos="fade-left" data-aos-offset="150">
            <img
              src="/images/feature1.svg"
              alt=""
              style={{
                width: window.innerWidth > 992 ? "100%" : "70vw",
                display: "block",
                margin: "20px auto",
              }}
            />
          </div>
        }
        rightColumn={
          <div data-aos="fade-right" data-aos-offset="150">
            <Typography
              margin="0 0 10px 0"
              textAlign="center"
              variant="h2"
              color="#1A212F"
              size={6}
              unit="vh"
            >
              Intuitive UI
            </Typography>
            <Typography
              margin="0 0 20px 0"
              textAlign="center"
              variant="p"
              color="#888888"
              size={3.5}
              unit="vh"
            >
              Do you want see app in action? Let's try it with demo account!
              It's completely free!
            </Typography>
          </div>
        }
      />
      <Feature
        reverse
        leftColumn={
          <div data-aos="fade-right" data-aos-offset="150">
            <Typography
              margin="0 0 10px 0"
              textAlign="center"
              variant="h2"
              color="#1A212F"
              size={6}
              unit="vh"
            >
              Searching bills
            </Typography>
            <Typography
              margin="0 0 20px 0"
              textAlign="center"
              variant="p"
              color="#888888"
              size={3.5}
              unit="vh"
            >
              Do you want see app in action? Let's try it with demo account!
              It's completely free!
            </Typography>
          </div>
        }
        rightColumn={
          <div data-aos="fade-left" data-aos-offset="150">
            <img
              src="/images/feature2.svg"
              alt=""
              style={{
                width: window.innerWidth > 992 ? "100%" : "70vw",
                display: "block",
                margin: "20px auto",
              }}
            />
          </div>
        }
      />
      <Feature
        greyBg
        leftColumn={
          <div data-aos="fade-right" data-aos-offset="150">
            <img
              src="/images/feature3.svg"
              alt=""
              style={{
                width: window.innerWidth > 992 ? "60%" : "50vw",
                display: "block",
                margin: "20px auto",
              }}
            />
          </div>
        }
        rightColumn={
          <div data-aos="fade-left" data-aos-offset="150">
            <Typography
              margin="0 0 10px 0"
              textAlign="center"
              variant="h2"
              color="#1A212F"
              size={6}
              unit="vh"
            >
              Convinient forms
            </Typography>
            <Typography
              margin="0 0 20px 0"
              textAlign="center"
              variant="p"
              color="#888888"
              size={3.5}
              unit="vh"
            >
              Do you want see app in action? Let's try it with demo account!
              It's completely free!
            </Typography>
          </div>
        }
      />
      <Feature
        reverse
        leftColumn={
          <div data-aos="fade-right" data-aos-offset="150">
            <Typography
              margin="0 0 10px 0"
              textAlign="center"
              variant="h2"
              color="#1A212F"
              size={6}
              unit="vh"
            >
              Helpfully dashboards
            </Typography>
            <Typography
              margin="0 0 20px 0"
              textAlign="center"
              variant="p"
              color="#888888"
              size={3.5}
              unit="vh"
            >
              Do you want see app in action? Let's try it with demo account!
              It's completely free!
            </Typography>
          </div>
        }
        rightColumn={
          <div data-aos="fade-left" data-aos-offset="150">
            <img
              src="/images/feature4.svg"
              alt=""
              style={{
                width: window.innerWidth > 992 ? "100%" : "70vw",
                display: "block",
                margin: "20px auto",
              }}
            />
          </div>
        }
      />
    </>
  );
};
