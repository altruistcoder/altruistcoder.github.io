"use client";

import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { PiArrowDownRightBold } from "react-icons/pi";
import { styled } from "@mui/system";

// Styled component for the scrolling text container
const ScrollingTextContainer = styled(Box)({
  position: "absolute",
  bottom: "0%" /* Adjust position as needed */,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  zIndex: 999,
  pointerEvents: "none",
  overflow: "hidden",
  color: "white",
});

// Styled component for the scrolling text itself
const ScrollingText = styled(Typography)({
  fontSize: "200px",
  fontWeight: 400,
  whiteSpace: "nowrap",
  animation: "scroll 15s linear infinite",
  animationTimingFunction: "linear" /* Ensures smooth linear movement */,

  // Keyframes for the scrolling animation
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(0%)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },
});

const Introduction = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Developer", "Innovator", "Dreamer", "Engineer"];

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < texts[textIndex].length) {
          setDisplayText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#9a9e9f",
        height: "100vh", // Set height to 100% to fill its parent container
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left Section */}
      <Grid item xs={4} sx={{ position: "relative", padding: "20px" }}>
        {/* Code by Dennis Logo */}
        <Box
          sx={{
            position: "absolute",
            top: "20px", // Adjust the top position as needed
            left: "20px", // Adjust the left position as needed
            zIndex: 1, // Ensure the logo is above the icons
          }}
        >
          <Typography variant="h6" sx={{ color: "white" }}>
            RA
          </Typography>
        </Box>

        {/* Icons Grid */}
        {/* <Box
          sx={{
            position: "fixed", // Change from absolute to fixed
            left: "20px", // Add left spacing from edge
            top: "50%", // Center vertically
            transform: "translateY(-50%)", // Perfect vertical centering
            display: "flex",
            flexDirection: isScrolled ? "column" : "row",
            alignItems: "center",
            borderTopRightRadius: isScrolled ? "0" : "20px",
            borderBottomRightRadius: isScrolled ? "0" : "20px",
            backgroundColor: "#1c1d20",
            padding: "15px", // Slightly increased padding
            zIndex: 1000, // Ensure icons stay above other content
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)", // Optional: adds subtle shadow
          }}
        >
          <IconButton
            sx={{
              padding: "10px",
              borderRadius: "10px",
              marginBottom: isScrolled ? "10px" : "0",
              marginRight: !isScrolled ? "10px" : "0",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <FaGithub size={"3rem"} style={{ color: "white" }} />
          </IconButton>
          <IconButton
            sx={{
              padding: "10px",
              borderRadius: "10px",
              marginBottom: isScrolled ? "10px" : "0",
              marginRight: !isScrolled ? "10px" : "0",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <FaLinkedin size={"3rem"} style={{ color: "white" }} />
          </IconButton>
          <IconButton
            sx={{
              padding: "10px",
              borderRadius: "10px",
              marginBottom: isScrolled ? "10px" : "0",
              marginRight: !isScrolled ? "10px" : "0",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <FaMedium size={"3rem"} style={{ color: "white" }} />
          </IconButton>
          <IconButton
            sx={{
              padding: "10px",
              borderRadius: "10px",
              marginBottom: isScrolled ? "10px" : "0",
              marginRight: !isScrolled ? "10px" : "0",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <HiMail size={"3.5rem"} style={{ color: "white" }} />
          </IconButton>
        </Box> */}
      </Grid>

      {/* Center Section */}
      <Grid item xs={4} sx={{ position: "relative", overflow: "hidden" }}>
        <img
          src="/sticker-1.png"
          alt="Dennis Snellenberg - Freelance Designer & Developer"
          style={{
            width: "100%",
            height: "100%", // Set height to 100% to fill its parent container
            objectFit: "cover",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            margin: "auto",
          }}
        />
      </Grid>

      {/* Right Section */}
      <Grid
        item
        xs={4}
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Typography
            variant="h6"
            onClick={() => scrollToSection("work")}
            sx={{
              cursor: "pointer",
              position: "relative",
              transition: "all 0.3s ease-in-out", // Add transition
              color: "white",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "white",
                visibility: "hidden",
                transform: "scaleX(0)",
                transition: "all 0.3s ease-in-out",
              },
              "&:hover": {
                color: "lightgray", // Change color on hover
                "&::before": {
                  visibility: "visible",
                  transform: "scaleX(1)",
                  transformOrigin: "left", // Adjust transform origin
                },
              },
            }}
          >
            Work
          </Typography>
          <Typography
            variant="h6"
            onClick={() => scrollToSection("about")}
            sx={{
              cursor: "pointer",
              position: "relative",
              transition: "all 0.3s ease-in-out", // Add transition
              color: "white",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "white",
                visibility: "hidden",
                transform: "scaleX(0)",
                transition: "all 0.3s ease-in-out",
              },
              "&:hover": {
                color: "lightgray", // Change color on hover
                "&::before": {
                  visibility: "visible",
                  transform: "scaleX(1)",
                  transformOrigin: "left", // Adjust transform origin
                },
              },
            }}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            onClick={() => scrollToSection("contact")}
            sx={{
              cursor: "pointer",
              position: "relative",
              transition: "all 0.3s ease-in-out", // Add transition
              color: "white",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                bottom: 0,
                left: 0,
                backgroundColor: "white",
                visibility: "hidden",
                transform: "scaleX(0)",
                transition: "all 0.3s ease-in-out",
              },
              "&:hover": {
                color: "lightgray", // Change color on hover
                "&::before": {
                  visibility: "visible",
                  transform: "scaleX(1)",
                  transformOrigin: "left", // Adjust transform origin
                },
              },
            }}
          >
            Contact
          </Typography>
        </Box>
        <ScrollingTextContainer>
          <ScrollingText>Rishabh Aggarwal - Rishabh Aggarwal</ScrollingText>
        </ScrollingTextContainer>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "22%", // Adjust this value to move the text further to the right
            transform: "translateY(-50%)",
            textAlign: "right",
            color: "white",
            zIndex: 2,
          }}
        >
          <PiArrowDownRightBold size={"2rem"} />
          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <Typography variant="h4" sx={{ paddingTop: "20px" }}>
              {displayText}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Introduction;
