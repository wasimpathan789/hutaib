import React, { useState } from 'react'
import { Box, Button, Grid, styled, TextField, Typography } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useTheme } from '@emotion/react';

const ContactUs = () => {
    const theme = useTheme();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [result, setResult] = useState("");
    const [validationErrors, setValidationErrors] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });
    const MyMapComponent = () => {
        console.log("Rendering Map");
        const position = [24.976121046520372, 74.66390030021019]; // Default position (latitude, longitude)
    
        return (
          <Box
            sx={{
              height: "400px",
              width: "100%",
              "& .leaflet-container": {
                height: "100%",
                width: "100%",
              },
            }}
          >
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>New test</Popup>
              </Marker>
            </MapContainer>
          </Box>
        );
      };
    return (
      <Box sx={{padding:"40px 0px"}}>
        <Typography
          sx={{ textAlign: "center" }}
          color={theme.palette.secondary.main}
          fontWeight={"500"}
          textTransform="capitalize"
          variant="h3"
          data-aos="fade-left"
          data-aos-duration={theme.animationSpeed.medium}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{ textAlign: "center" }}
          color={theme.palette.gray.main}
          textTransform="capitalize"
          variant="h6"
          data-aos="fade-left"
          data-aos-duration={theme.animationSpeed.medium}
        >
          Swing by for a cup of coffee, or leave us a message:
        </Typography>
        <Grid container spacing={2} sx={{ padding: "10px 10px" }}>
          <Grid item xs={12} md={6} lg={6}>
            <Box
              item
              sx={{
                p: {
                  xs: theme.customPadding.xs,
                  sm: theme.customPadding.sm,
                  md: theme.customPadding.md,
                  lg: theme.customPadding.lg,
                },
              }}
            >
              <TextField
                required
                id="outlined-required-name"
                label={"Full Name"}
                variant="outlined"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
                error={!!validationErrors.name}
                helperText={validationErrors.name}
                data-aos="fade-right"
                data-aos-duration={theme.animationSpeed.medium}
              />
              <TextField
                sx={{ marginTop: 1 }}
                required
                id="outlined-required-name"
                label={"Email"}
                variant="outlined"
                fullWidth
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                error={!!validationErrors.email}
                helperText={validationErrors.email}
                data-aos="fade-right"
                data-aos-duration={theme.animationSpeed.medium}
              />
              <TextField
                sx={{ marginTop: 1 }}
                required
                id="outlined-required-name"
                label={"Subject"}
                variant="outlined"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
                error={!!validationErrors.name}
                helperText={validationErrors.name}
                data-aos="fade-right"
                data-aos-duration={theme.animationSpeed.medium}
              />

              <TextField
                sx={{ marginTop: 1 }}
                required
                id="outlined-required-name"
                label={"Your Message"}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                error={!!validationErrors.message}
                helperText={validationErrors.message}
                data-aos="fade-right"
                data-aos-duration={theme.animationSpeed.medium}
              />
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.primary.main,
                  },
                  backgroundColor: theme.palette.primary.main,
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <Typography fontSize={14} color={theme.palette.light.main}>
                  Submit
                </Typography>
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <MyMapComponent />
          </Grid>
        </Grid>
      </Box>
    );
  };

export default ContactUs
