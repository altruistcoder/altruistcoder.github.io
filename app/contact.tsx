import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import Globe, { GlobeMethods } from "react-globe.gl";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// Generate random arcs data for the globe (not modified)
const N = 1000;
const arcsData = Array.from(Array(N).keys()).map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [
    ["#B43632", "#EEB649", "#CCD556"][Math.round(Math.random() * 3)],
    ["#B43632", "#EEB649", "#CCD556"][Math.round(Math.random() * 3)],
  ],
}));

// Styled components
const GlobeContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  pointerEvents: "none",
});

const StarsContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  overflow: "hidden",
  pointerEvents: "none", // Prevent interference with page interactions
});

const Star = styled(Box)({
  position: "absolute",
  backgroundColor: "white",
  borderRadius: "50%",
  animation: "rotateStars infinite linear",
  transformOrigin: "50% 50%",
  "@keyframes rotateStars": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});

// Generate random stars
const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const top = Math.random() * 100; // Random vertical position (0-100%)
    const left = Math.random() * 100; // Random horizontal position (0-100%)
    const size = Math.random() * 3 + 1; // Random size for the stars (1-4px)
    const duration = Math.random() * 15 + 10; // Random animation duration (10-25s)
    const delay = Math.random() * 5; // Random animation delay (0-5s)

    stars.push(
      <Star
        key={i}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }
  return stars;
};

const Contact = () => {
  const globeElement = React.useRef<GlobeMethods | undefined>(undefined);
  const [size, setSize] = React.useState([0, 0]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    if (globeElement.current) {
      // Auto-rotate globe on page load
      globeElement.current.controls().autoRotate = true;
      globeElement.current.controls().autoRotateSpeed = 2;
      globeElement.current.controls().enableZoom = false;
    }
  }, []);

  React.useLayoutEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);
  }, []);

  return (
    <Box
      sx={{
        paddingBottom: "4rem",
        position: "relative",
        backgroundColor: "#1c1b22",
        overflow: "hidden",
        paddingTop: "8rem",
      }}
    >
      {/* Stars in background */}
      <StarsContainer>{generateStars(500)}</StarsContainer>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#232229",
                padding: 8,
                borderRadius: "20px",
              }}
            >
              <Typography
                variant="h4"
                style={{ fontSize: "17px", color: "white" }}
              >
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
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GlobeContainer sx={{ height: "600px" }}>
              <Globe
                width={size[0]}
                height={size[1]}
                waitForGlobeReady={false}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                arcsData={arcsData}
                arcColor={"color"}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcStroke={0.05}
                animateIn={false}
                arcDashAnimateTime={10000}
                ref={globeElement}
                enablePointerInteraction={false}
                backgroundColor="rgba(0, 0, 0, 0)" // Set background to transparent
              />
            </GlobeContainer>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll-to-top button */}
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
            backgroundColor: "rgba(255, 255, 255, 0.75)", // Keep the same background color on hover
          },
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    </Box>
  );
};

export default Contact;
