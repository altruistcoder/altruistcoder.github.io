import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ backgroundColor: "#1c1b22", paddingBottom: "2rem" }}>
      <Container maxWidth="lg">
        <Box sx={{ color: "white", padding: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography variant="h4" style={{ fontSize: "17px" }}>
                GET IN TOUCH
              </Typography>
              <Typography
                variant="h4"
                style={{ paddingTop: "10px", fontWeight: "bold" }}
              >
                Contact
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
