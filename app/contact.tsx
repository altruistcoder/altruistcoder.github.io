import React from "react";
import { Container, Grid, Typography, Box, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ backgroundColor: "#1c1b22", paddingBottom: "2rem" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ backgroundColor: "#232229", padding: 8, borderRadius: 2 }}>
              <Typography variant="h4" style={{ fontSize: "17px", color: "white" }}>
                GET IN TOUCH
              </Typography>
              <Typography
                variant="h4"
                style={{ paddingTop: "10px", fontWeight: "bold", color: "white" }}
              >
                Contact
              </Typography>
              <form noValidate autoComplete="off" style={{ marginTop: "20px" }}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                    }
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  type="email"
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                    }
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  InputLabelProps={{ style: { color: 'white' } }}
                  InputProps={{ style: { color: 'white' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                    }
                  }}
                />
                <Button
                  variant="contained"
                  style={{ marginTop: "20px", backgroundColor: "#1c1b22", color: "white" }}
                >
                  Send
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
