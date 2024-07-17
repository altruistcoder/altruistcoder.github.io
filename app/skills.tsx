import React from "react";
import { Container, Grid, Typography, Box, Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import { FaHtml5, FaCss3, FaPython, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiOpenshift, DiDjango, DiMongodb } from "react-icons/di";
import { SiKubernetes, SiAzuredevops, SiTerraform, SiFlask, SiPrometheus, SiGrafana, SiMlflow, SiCplusplus } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";

const skills = [
  {name: "Python", icon: <FaPython size="5em" />},
  {name: "C++", icon: <SiCplusplus size="5em" />},
  { name: "JavaScript", icon: <IoLogoJavascript size="5em" /> },
  {name: "Openshift", icon: <DiOpenshift size="5em" />},
  {name: "Kubernetes", icon: <SiKubernetes size="5em" />},
  {name: "Docker", icon: <FaDocker size="5em" />},
  {name: "AWS", icon: <FaAws size="5em" />},
  {name: "Azure", icon: <SiAzuredevops size="5em" />},
  {name: "Terraform", icon: <SiTerraform size="5em" />},
  {name: "Flask", icon: <SiFlask size="5em" />},
  {name: "Django", icon: <DiDjango size="5em" />},
  { name: "HTML 5", icon: <FaHtml5 size="5em" /> },
  { name: "CSS 3", icon: <FaCss3 size="5em" /> },
  {name: "ReactJS", icon: <RiReactjsFill size="5em" />},
  {name: "MongoDB", icon: <DiMongodb size="5em" />},
  {name: "Machine Learning", icon: <GiArtificialIntelligence size="5em" />},
  {name: "Git", icon: <FaGitAlt size="5em" />},
  {name: "MLFlow", icon: <SiMlflow size="5em" />},
  {name: "Prometheus", icon: <SiPrometheus size="5em" />},
  {name: "Grafana", icon: <SiGrafana size="5em" />},
];

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#232229",
  padding: "1rem",
  borderRadius: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "150px",
  width: "150px",
  // boxShadow: theme.shadows[3],
  transition: "transform 0.3s, color 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
    color: "#ce6389",
  },
}));

const Skills = () => {
  return (
    <Box sx={{ backgroundColor: "#1c1b22", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Container maxWidth="lg">
        <Box sx={{ color: "white", padding: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ fontSize: '17px' }}>WHAT I HAVE LEARNT</Typography>
              <Typography variant="h4" style={{ paddingTop: '10px', fontWeight: 'bold' }}>My Skills</Typography>
            </Grid>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Tooltip title={skill.name} placement="top">
                  <IconWrapper>
                    {skill.icon}
                  </IconWrapper>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
