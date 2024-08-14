import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const ResponsiveImage = ({
  smImage,
  mdImage,
  lgImage,
  width,
  height,
  smHeight,
  mdHeight,
  animation,
  duration,
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      {isSmall && (
        <img
          src={smImage}
          width={width || "100%"}
          height={smHeight || "350px"}
          alt="Small Device"
          style={{ backgroundSize: "cover", backgroundPosition: "center" }}
          data-aos={animation}
          data-aos-duration={duration}
        />
      )}
      {isMedium && (
        <img
          src={mdImage}
          width={width || "100%"}
          height={mdHeight || "500px"}
          alt="Medium Device"
          style={{
            backgroundSize: "contain",
            objectFit: "fill",
            backgroundPosition: "center",
          }}
          data-aos={animation}
          data-aos-duration={duration}
        />
      )}
      {isLarge && (
        <img
          src={lgImage}
          width={width || "100%"}
          height={height || "700px"}
          alt="Large Device"
          style={{ backgroundSize: "contain", backgroundPosition: "center" }}
          data-aos={animation}
          data-aos-duration={duration}
        />
      )}
    </Box>
  );
};

export default ResponsiveImage;
