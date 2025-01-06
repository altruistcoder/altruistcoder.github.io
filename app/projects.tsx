import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { projects } from "@/constants";

const textVariant = () => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
});

const Projects: React.FC = () => {
  return (
    <Box
      sx={{ backgroundColor: "#1c1b22", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ color: "white", paddingTop: 8 }}>
          <motion.div variants={textVariant()}>
            <Typography variant="h4" style={{ fontSize: "17px" }}>
              MY WORK
            </Typography>
            <Typography
              variant="h4"
              style={{ paddingTop: "10px", fontWeight: "bold" }}
            >
              Projects
            </Typography>
          </motion.div>
          <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={index} className="flex">
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "stretch",
                    width: "100%",
                  }}
                >
                  <ProjectCard index={index} {...project} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
