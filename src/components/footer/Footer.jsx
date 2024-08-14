import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { logo } from "../../utils/images";
import { Link } from "react-router-dom";
// icons
import { FaLongArrowAltRight, FaFacebookF, FaHome, FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useTheme } from "@emotion/react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineMail } from "react-icons/md";

FaHome;

import { usefullLinksData } from "../../data/UsefullLinksData";

const Footer = () => {
  const theme = useTheme();

  const SocialMediaButton = ({
    onClick,
    hoverBackgroundColor,
    width,

    backgroundColor,
    icon: Icon,
    label,
  }) => {
    return (
      <Box
        sx={{
          "&:hover": {
            backgroundColor: hoverBackgroundColor || "white",
            color: theme.palette.primary.main,
          },
          backgroundColor: backgroundColor || theme.palette.primary.main,
          height: "45px",
          width: "45px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        color={"white"}
        onClick={onClick}
        data-aos="fade-up"
        data-aos-duration={theme.animationSpeed.fast}
      >
        <Icon />
        {/* <span>{label}</span> */}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        p: {
          xs: theme.customPadding.xs,
          sm: theme.customPadding.sm,
          md: theme.customPadding.md,
          lg: theme.customPadding.lg,
        },
        backgroundColor: "#151414",
        paddingBottom: "0px",
        // padding: "20px", // Add any other styling you need
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>
            <div
              className="logo"
              data-aos="fade-right"
              data-aos-duration={theme.animationSpeed.fast}
            >
              <img src={logo} alt="logo" width={"200px"} height={"50px"} />
            </div>
            <Typography
              color={"white"}
              variant="body1"
              data-aos="fade-right"
              data-aos-duration={theme.animationSpeed.medium}
              marginTop={3}
            >
              We are Pune based Manufacturers,Exporters and Suppliers of
              outstanding variety of Cable Trays,Raceways,WireMesh & industrial
              fabrications.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              color={"white"}
              textTransform="capitalize"
              variant="h5"
              data-aos="fade-down"
              data-aos-duration={theme.animationSpeed.medium}
            >
              Useful Links
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                {usefullLinksData.slice(0, 6).map((item, index) => (
                  <Link
                    color={"white"}
                    variant="body2"
                    component={Link}
                    to={"/"}
                  >
                    <Typography
                      sx={{
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                      color={theme.palette.gray.main}
                      textTransform="capitalize"
                      variant="h6"
                      data-aos="fade-down"
                      data-aos-duration={theme.animationSpeed.medium}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ))}
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}>
                {usefullLinksData.slice(6, 12).map((item, index) => (
                  <Link
                    color={"white"}
                    variant="body2"
                    component={Link}
                    to={"/"}
                  >
                    <Typography
                      sx={{
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                      color={theme.palette.gray.main}
                      textTransform="capitalize"
                      variant="h6"
                      data-aos="fade-down"
                      data-aos-duration={theme.animationSpeed.medium}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              color={"white"}
              textTransform="capitalize"
              variant="h5"
              data-aos="fade-down"
              data-aos-duration={theme.animationSpeed.medium}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <SocialMediaButton
                title={"connectWithFacebook"}
                backgroundColor={"#3b5998"}
                icon={FaFacebookF }
          
              />
              <SocialMediaButton
                title={"connectWithFacebook"}
                backgroundColor={"#3b5998"}
                icon={FaLinkedinIn}
   
              />
              <SocialMediaButton
                title={"connectWithFacebook"}
                backgroundColor={"#3b5998"}
                icon={MdOutlineMail}
            
              />
              <SocialMediaButton
                title={"connectWithFacebook"}
                backgroundColor={"#3b5998"}
                icon={FaInstagram}
                label="Home"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              color={"white"}
              textTransform="capitalize"
              variant="h5"
              data-aos="fade-left"
              data-aos-duration={theme.animationSpeed.medium}
            >
              Find Us
            </Typography>
            <Box
              sx={{ display: "flex", gap: "10px" }}
              data-aos="fade-left"
              data-aos-duration={theme.animationSpeed.medium}
              marginTop={3}
            >
              <FaLocationDot
                //   style={{ marginTop: "8px" }}
                size={28}
                color={theme.palette.primary.main}
                data-aos="fade-left"
                data-aos-duration={theme.animationSpeed.medium}
              />
              <Link
                color={"white"}
                variant="body2"
                component={Link}
                to="/about"
              >
                <Typography
                  color={theme.palette.primary.main}
                  data-aos="fade-left"
                  data-aos-duration={theme.animationSpeed.medium}
                >
                  No 449 Budhwar Peth, Tapkir Galli, Laxmi Market, Budhwar Peth
                  Pune, Maharashtra India 411002.
                </Typography>
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "5px",
              }}
              data-aos="fade-left"
              data-aos-duration={theme.animationSpeed.medium}
            >
              <FaPhone color={theme.palette.primary.main} />
              <Link
                color={"white"}
                variant="body2"
                component={Link}
                to="/about"
              >
                <Typography color={"white"}>9158-144-792</Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "5px",
              }}
              data-aos="fade-left"
              data-aos-duration={theme.animationSpeed.medium}
            >
              <MdOutlineEmail color={theme.palette.primary.main} />
              <Link
                color={"white"}
                variant="body2"
                component={Link}
                to="/about"
              >
                <Typography color={"white"}>
                  hutaibelectricals@gmail.com
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          border: "1px solid white",
          borderBottomWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "red",
          height: 50,
        }}
        marginTop={4}
      >
        <Typography textAlign={"center"} color={theme.palette.primary.main}marginTop={3}>
          Copyright © 2022 Hutaib Electricals , All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
