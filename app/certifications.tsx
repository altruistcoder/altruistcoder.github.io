import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { testimonials } from "@/constants"; // Adjust the import path as needed
import CertificationCard from "./CertificationCard"; // Adjust the import path as needed
import { textVariant } from "./utils/motion"; // Adjust the import path as needed
import { styles } from "./styles"; // Adjust the import path as needed

const Certifications = () => {
  return (
    <Box sx={{ backgroundColor: "#1c1b22", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Container maxWidth="lg">
        <Box sx={{ color: "white", padding: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <motion.div variants={textVariant()}>
                <Typography variant="h4" style={{ fontSize: "17px" }}>
                  WHAT YOU FOCUS ON GROWS
                </Typography>
                <Typography variant="h4" style={{ paddingTop: "10px", fontWeight: "bold" }}>
                  Certifications
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
          <Grid container spacing={4} className={`mt-12 bg-black-100 rounded-[20px]`}>
            {testimonials.map((certification, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CertificationCard index={index} {...certification} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Certifications;
