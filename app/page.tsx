"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Introduction from "./Intro";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Certifications from "./certifications";
// import Awards from "./awards";
import Contact from "./contact";
import Loading from "./loading";
import { Box, keyframes } from "@mui/material";
import SocialIcons from "./SocialIcons";

// Define the wave animation keyframes
const waveAnimation = keyframes`
  0% { transform: translateY(100vh); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Add this state

  // Add useEffect for scroll handling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFinishLoading = () => {
    setIsLoading(false);
    setTimeout(() => {
      setIsHomeVisible(true);
    }, 100);
  };

  if (isLoading) {
    return <Loading onFinish={handleFinishLoading} />;
  }

  return (
    <>
      <SocialIcons isScrolled={isScrolled} isVisible={isHomeVisible} />{" "}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          opacity: isHomeVisible ? 1 : 0,
          animation: isHomeVisible
            ? `${waveAnimation} 1s ease-in-out forwards`
            : "none",
        }}
      >
        <Introduction />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        {/* <Awards /> */}
        <Contact />
      </Box>
    </>
  );
}
