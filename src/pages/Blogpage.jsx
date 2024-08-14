import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Blogpage = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{height:"30vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Typography variant="h3">Blog page</Typography>
      </Box>
   
      <Footer />
    </Box>
  );
};

export default Blogpage;
