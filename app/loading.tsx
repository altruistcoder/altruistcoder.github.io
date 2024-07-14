"use client";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const sections = [
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Привет",
  "مرحبا",
];

interface LoadingProps {
  onFinish: () => void;
}

interface SectionProps {
  text: string;
  isActive: boolean;
}

function Section({ text, isActive }: SectionProps) {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    if (isActive) {
      setDisplayText(text);
    } else {
      setDisplayText("");
    }
  }, [isActive, text]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: isActive ? 1 : 0,
        transition: "opacity 0.1s linear",
        color: "white",
      }}
    >
      <Typography variant="h1" sx={{ color: "white", fontWeight: 300 }}>
        {displayText}
      </Typography>
    </Box>
  );
}

export default function Loading({ onFinish }: LoadingProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex < sections.length) {
      const timer = setTimeout(() => {
        setActiveIndex(activeIndex + 1);
      }, 200); // Fast delay between sections

      return () => clearTimeout(timer);
    } else {
      onFinish();
    }
  }, [activeIndex, onFinish]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {sections.map((text, index) => (
        <Section
          key={index}
          text={text}
          isActive={index === activeIndex}
        />
      ))}
    </Box>
  );
}
