import React, { useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

// Define type for experience data
interface ExperienceData {
  years: number[];
}

const experienceData: ExperienceData = {
  years: [2013, 2015, 2017, 2018, 2019, 2019, 2022, 2024],
};

const Experience = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(
    experienceData.years[experienceData.years.length - 1]
  );

  const handleYearClick = (year: number) => {
    setSelectedYear(year);
  };

  const getLeftPosition = (year: number) => {
    const minYear = experienceData.years[0];
    const maxYear = experienceData.years[experienceData.years.length - 1];
    return ((year - minYear) / (maxYear - minYear)) * 100;
  };

  const selectedYearIndex = selectedYear
    ? experienceData.years.indexOf(selectedYear)
    : -1;

  return (
    <Box sx={{ backgroundColor: "#1c1b22", paddingBottom: "2rem" }}>
      <Container maxWidth="lg">
        <Box sx={{ color: "white", padding: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography variant="h4" style={{ fontSize: '17px' }}>MY CAREER</Typography>
              <Typography variant="h4" style={{ paddingTop: '10px', fontWeight: 'bold' }}>Education & Experience</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" align="right">
                29 <Typography variant="subtitle2">years old</Typography>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  py: 5,
                }}
              >
                {/* Horizontal Line */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    width: "100%",
                    height: 2,
                    backgroundColor: "white",
                    zIndex: 0,
                    transition: "width 0.3s ease",
                  }}
                />
                {selectedYear !== null && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      width: `${getLeftPosition(selectedYear)}%`,
                      height: 2,
                      backgroundColor: "#DF6589FF",
                      zIndex: 1,
                      transition: "width 0.3s ease",
                    }}
                  />
                )}
                {experienceData.years.map((year, index) => {
                  const isSelected = selectedYear === year;
                  const leftPosition = `${getLeftPosition(year)}%`;
                  const isPastSelected = selectedYearIndex !== -1 && index <= selectedYearIndex;

                  return (
                    <Box
                      key={year}
                      sx={{
                        position: "absolute",
                        left: leftPosition,
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                        zIndex: 2,
                        color: "white",
                        textAlign: "center",
                        paddingTop: "28px",
                      }}
                      onClick={() => handleYearClick(year)}
                    >
                      {/* Dot */}
                      <Box
                        sx={{
                          width: isSelected ? 12 : 10,
                          height: isSelected ? 12 : 10,
                          backgroundColor: isSelected
                            ? "#DF6589FF"
                            : isPastSelected
                            ? "#DF6589FF"
                            : "white",
                          borderRadius: "50%",
                          zIndex: 2,
                          border: isSelected ? "2px solid #1c1b22" : "none",
                          transition: "all 0.3s ease",
                          boxShadow: isSelected ? "0 0 0 2px #DF6589FF" : "none",
                        }}
                      />
                      {/* Year label */}
                      <Typography
                        variant="body2"
                        sx={{ color: "white", marginTop: 1 }}
                      >
                        {year}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Grid>
            {/* Additional section */}
            {selectedYear !== null && (
              <Grid item xs={12}>
                <Box
                  sx={{
                    marginTop: 4,
                    backgroundColor: "#2c2b33",
                    padding: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#DF6589FF" }}>
                    24 Sept {selectedYear}
                  </Typography>
                  <Typography variant="h5" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                    I took responsibility in my life
                  </Typography>
                  <Typography variant="body1" sx={{ paddingTop: 3 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
                    vulputate commodo lectus, ac blandit elit tincidunt id.
                  </Typography>
                  <Typography variant="body1" sx={{ paddingTop: 1 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
                    vulputate commodo lectus, ac blandit elit tincidunt id.
                  </Typography>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      backgroundColor: 'white',
                      borderRadius: '0 0 4px 4px',
                    }}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
