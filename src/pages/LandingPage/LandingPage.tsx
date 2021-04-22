import "aos/dist/aos.css";

import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";

import { MobileHero } from "types";

import { Hero } from "./sections/Hero";
import { Contact } from "./sections/Contact";
import { DemoAccount, Footer, Header, Outro } from "./sections";
import { Intro } from "./sections/Intro";
import { Features } from "./sections/Features";
import { ModalWithDemo } from "./components/ModalWithDemo";

const BLOCK_HORIZONTAL: React.CSSProperties = { overflowX: "hidden" };

type Timeout = ReturnType<typeof setTimeout>;

export const LandingPage: React.FC = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [mobileHero, setMobileHero] = useState(MobileHero.SHOWCASE);
  const [showModalWithDemo, setShowModalWithDemo] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState<number>(0);
  const timeoutRef = useRef<Timeout | undefined>(undefined);

  const debounce = (method: () => void, delay: number) => {
    clearTimeout(timeoutRef.current as Timeout);
    timeoutRef.current = setTimeout(function () {
      method();
    }, delay);
  };

  const heroRef = useRef<HTMLElement | null>(null);
  const featuresRef = useRef<HTMLElement | null>(null);
  const demoRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const handleWindowScrollWithDebouncer = () => {
    handleWindowScroll();
  };

  const handleWindowScroll = () => {
    debounce(() => {
      if (window.scrollY >= 50 && !isScrolledDown) {
        setIsScrolledDown(true);
      } else if (window.scrollY < 50 && isScrolledDown) {
        setIsScrolledDown(false);
      }
      if (window.innerWidth > 992) {
        if (
          heroRef.current?.offsetTop !== undefined &&
          featuresRef.current?.offsetTop !== undefined &&
          demoRef.current?.offsetTop !== undefined &&
          contactRef.current?.offsetTop !== undefined
        ) {
          const ranges = [
            heroRef.current.offsetTop + heroRef.current.clientHeight,
            featuresRef.current.offsetTop + featuresRef.current.clientHeight,
            demoRef.current.offsetTop + demoRef.current.clientHeight,
          ];
          const currentScroll = window.scrollY + window.innerHeight / 2;

          if (currentScroll <= ranges[0] && activeNavLink !== 0) {
            setActiveNavLink(0);
          } else if (
            currentScroll > ranges[0] &&
            currentScroll <= ranges[1] &&
            activeNavLink !== 1
          ) {
            setActiveNavLink(1);
          } else if (
            currentScroll > ranges[1] &&
            currentScroll <= ranges[2] &&
            activeNavLink !== 2
          ) {
            setActiveNavLink(2);
          } else if (currentScroll > ranges[2] && activeNavLink !== 3) {
            setActiveNavLink(3);
          }
        }
      }
    }, 150);
  };

  window.addEventListener("scroll", handleWindowScrollWithDebouncer);

  useEffect(() => {
    setTimeout(function () {
      const viewheight = window.innerHeight;
      const viewwidth = window.innerWidth;
      const viewport = document.querySelector("meta[name=viewport]");
      (viewport as Element).setAttribute(
        "content",
        "height=" +
          viewheight +
          "px, width=" +
          viewwidth +
          "px, initial-scale=1.0"
      );
    }, 300);

    AOS.init({
      offset: 50,
      duration: 400,
      easing: "ease-in-sine",
      debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 200,
    });

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <>
      <Header
        isScrolledDown={isScrolledDown}
        mobileHero={mobileHero}
        activeNavLink={activeNavLink}
        setMobileHero={setMobileHero}
      />
      <section id="hero" ref={heroRef} style={BLOCK_HORIZONTAL}>
        <Hero isScrolledDown={isScrolledDown} mobileHero={mobileHero} />
      </section>
      <section id="features" ref={featuresRef} style={BLOCK_HORIZONTAL}>
        <Intro />
        <Features />
      </section>
      <section id="demo" ref={demoRef} style={BLOCK_HORIZONTAL}>
        <DemoAccount
          openModalWithDemo={() => {
            setShowModalWithDemo(true);
            document.body.style.overflowY = "hidden";
          }}
        />
      </section>
      <section id="outro" style={BLOCK_HORIZONTAL}>
        <Outro />
      </section>
      <section id="contact" ref={contactRef} style={BLOCK_HORIZONTAL}>
        <Contact />
      </section>
      <Footer />
      <ModalWithDemo
        showModal={showModalWithDemo}
        onCloseClick={() => {
          setShowModalWithDemo(false);
          document.body.style.overflowY = "auto";
        }}
      />
    </>
  );
};
