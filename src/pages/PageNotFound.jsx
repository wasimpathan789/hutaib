
import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const PageNotFound = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{height:"30vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Typography variant="h3">404. Page Not Found</Typography>
      </Box>
   
      <Footer />
    </Box>
  );
};

export default PageNotFound;

