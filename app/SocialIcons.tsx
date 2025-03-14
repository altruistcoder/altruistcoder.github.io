"use client";

import React from "react";
import { Box, IconButton, Fade } from "@mui/material";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

interface SocialIconsProps {
  isScrolled: boolean;
  isVisible?: boolean;
}

const SocialIcons = ({ isScrolled, isVisible = true }: SocialIconsProps) => {
  return (
    <Fade in={isVisible} timeout={1000}>
      <Box
        sx={{
          position: "fixed",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: isScrolled ? "column" : "row",
          alignItems: "center",
          borderTopRightRadius: isScrolled ? "0" : "20px",
          borderBottomRightRadius: isScrolled ? "0" : "20px",
          backgroundColor: "#1c1d20",
          padding: "15px",
          zIndex: 9999,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <IconButton
          component="a"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            padding: "10px",
            borderRadius: "10px",
            marginBottom: isScrolled ? "10px" : "0",
            marginRight: !isScrolled ? "10px" : "0",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
              transform: "scale(1.1)",
            },
          }}
        >
          <FaGithub size={"3rem"} style={{ color: "white" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            padding: "10px",
            borderRadius: "10px",
            marginBottom: isScrolled ? "10px" : "0",
            marginRight: !isScrolled ? "10px" : "0",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
              transform: "scale(1.1)",
            },
          }}
        >
          <FaLinkedin size={"3rem"} style={{ color: "white" }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://medium.com/@yourusername"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            padding: "10px",
            borderRadius: "10px",
            marginBottom: isScrolled ? "10px" : "0",
            marginRight: !isScrolled ? "10px" : "0",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
              transform: "scale(1.1)",
            },
          }}
        >
          <FaMedium size={"3rem"} style={{ color: "white" }} />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:your.email@example.com"
          sx={{
            padding: "10px",
            borderRadius: "10px",
            marginBottom: isScrolled ? "10px" : "0",
            marginRight: !isScrolled ? "10px" : "0",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
              transform: "scale(1.1)",
            },
          }}
        >
          <HiMail size={"3.5rem"} style={{ color: "white" }} />
        </IconButton>
      </Box>
    </Fade>
  );
};

export default SocialIcons;
