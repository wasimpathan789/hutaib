
import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Aboutpage = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{height:"30vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Typography variant="h3">About page</Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default Aboutpage;

