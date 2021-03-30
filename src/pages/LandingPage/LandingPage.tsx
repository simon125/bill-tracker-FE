import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from "./sections/Hero";
import { Contact } from "./sections/Contact";
import { DemoAccount, Footer, Header, Outro } from "./sections";
import { Intro } from "./sections/Intro";
import { Features } from "./sections/Features";
import { MobileHero } from "types";

const BLOCK_HORIZONTAL: React.CSSProperties = { overflowX: "hidden" };

export const LandingPage: React.FC = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [mobileHero, setMobileHero] = useState(MobileHero.SHOWCASE);

  const handleWindowScroll = () => {
    if (window.scrollY >= 50 && !isScrolledDown) {
      setIsScrolledDown(true);
    } else if (window.scrollY < 50 && isScrolledDown) {
      setIsScrolledDown(false);
    }
  };

  window.addEventListener("scroll", handleWindowScroll);

  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 400,
      easing: "ease-in-sine",
      debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 200,
    });
    return () => window.removeEventListener("scroll", handleWindowScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header
        isScrolledDown={isScrolledDown}
        mobileHero={mobileHero}
        setMobileHero={setMobileHero}
      />
      <section id="hero" style={BLOCK_HORIZONTAL}>
        <Hero isScrolledDown={isScrolledDown} mobileHero={mobileHero} />
      </section>
      <section id="features" style={BLOCK_HORIZONTAL}>
        <Intro />
        <Features />
      </section>
      <section id="demo" style={BLOCK_HORIZONTAL}>
        <DemoAccount />
      </section>
      <section id="outro" style={BLOCK_HORIZONTAL}>
        <Outro />
      </section>
      <section id="contact" style={BLOCK_HORIZONTAL}>
        <Contact />
      </section>
      <Footer />
    </>
  );
};
