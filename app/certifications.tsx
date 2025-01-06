import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { testimonials } from "@/constants"; // Adjust the import path as needed
import CertificationCard from "./CertificationCard"; // Adjust the import path as needed
import { textVariant } from "./utils/motion"; // Adjust the import path as needed
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Certifications = () => {
  return (
    <Box
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
          <motion.div variants={textVariant()}>
            <Typography variant="h4" style={{ fontSize: "17px" }}>
              WHAT YOU FOCUS ON GROWS
            </Typography>
            <Typography
              variant="h4"
              style={{ paddingTop: "10px", fontWeight: "bold" }}
            >
              Certifications
            </Typography>
          </motion.div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            style={{ padding: "40px 0" }}
          >
            {testimonials.map((certification, index) => (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  height: "400px", // Ensure a consistent height for each slide
                }}
              >
                <CertificationCard index={index} {...certification} />
              </SwiperSlide>
            ))}
          </Swiper>
          <style>
            {`
              .swiper-button-prev,
              .swiper-button-next {
                width: 16px;
                height: 16px;
                background-color: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                color: white;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 1000;
              }
            `}
          </style>
        </Box>
      </Container>
    </Box>
  );
};

export default Certifications;
