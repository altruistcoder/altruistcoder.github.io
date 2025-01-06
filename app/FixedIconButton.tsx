import React from "react";
import { Box, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const FixedIconButton = () => {
  return (
    <Box
      sx={{
        position: "fixed", // Ensure it is fixed on the screen
        top: "50%",
        left: "0",
        transform: "translateY(-50%)", // Center the icons vertically
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        zIndex: 1000, // Make sure it's above other elements
        padding: "10px",
        backgroundColor: "rgba(0,0,0,0.5)", // Optional: Adding a background to the container
        borderRadius: "5px", // Optional: For better appearance
      }}
    >
      <IconButton
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          color: "#1c1b22",
          borderRadius: "50%",
          padding: "10px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.75)", // Keep the same background color on hover
          },
        }}
      >
        <FaGithub size={"3rem"} style={{ color: "white" }} />
      </IconButton>
      <IconButton
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          color: "#1c1b22",
          borderRadius: "50%",
          padding: "10px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.75)", // Keep the same background color on hover
          },
        }}
      >
        <FaLinkedin size={"3rem"} style={{ color: "white" }} />
      </IconButton>
      <IconButton
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          color: "#1c1b22",
          borderRadius: "50%",
          padding: "10px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.75)", // Keep the same background color on hover
          },
        }}
      >
        <FaMedium size={"3rem"} style={{ color: "white" }} />
      </IconButton>
      <IconButton
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          color: "#1c1b22",
          borderRadius: "50%",
          padding: "10px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.75)", // Keep the same background color on hover
          },
        }}
      >
        <HiMail size={"3.5rem"} style={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};

export default FixedIconButton;
