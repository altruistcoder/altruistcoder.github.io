"use client";

import React, { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Contact = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#1c1b22",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            color: "white",
            padding: 8,
            backgroundColor: "#232229",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h4" style={{ fontSize: "17px", color: "white" }}>
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h4"
            style={{
              paddingTop: "10px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Contact
          </Typography>
          <form noValidate autoComplete="off" style={{ marginTop: "20px" }}>
            <Box sx={{ marginBottom: "20px" }}>
              <Typography
                variant="h6"
                style={{ color: "white", fontSize: "14px" }}
              >
                Your Name
              </Typography>
              <TextField
                style={{ backgroundColor: "#1c1b22" }}
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="What's your good name?"
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <Typography
                variant="h6"
                style={{ color: "white", fontSize: "14px" }}
              >
                Your Email
              </Typography>
              <TextField
                style={{ backgroundColor: "#1c1b22" }}
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="What's your email address?"
                type="email"
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{ style: { color: "white" } }}
              />
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <Typography
                variant="h6"
                style={{ color: "white", fontSize: "14px" }}
              >
                Your Message
              </Typography>
              <TextField
                style={{ backgroundColor: "#1c1b22" }}
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Please write your message here..."
                multiline
                rows={4}
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white" },
                  sx: {
                    "&::placeholder": {
                      color: "lightgray",
                    },
                  },
                }}
              />
            </Box>
            <Button
              variant="contained"
              style={{
                marginTop: "20px",
                backgroundColor: "#1c1b22",
                color: "white",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              Send
            </Button>
          </form>
        </Box>
      </Container>

      <IconButton
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          color: "#1c1b22",
          borderRadius: "50%",
          padding: "10px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Box>
  );
};

export default Contact;
