
import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ContactUs from "../components/common/ContactUs";

const Contactpage = () => {
  return (
    <Box>
      <Navbar />
     <ContactUs/>
      <Footer />
    </Box>
  );
};

export default Contactpage;

