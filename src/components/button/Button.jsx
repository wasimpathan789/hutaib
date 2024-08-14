import { Typography,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CustomButton = ({
  btnLabel,
  textColor,
  bgColor,
  bgHoverColor,
  link,
  animation,
  animationDuration,
}) => {
  return (
    <Button
      sx={{
        "&:hover": {
          backgroundColor: bgHoverColor || "#ffba00",
          color: textColor || "white",
        },
        borderRadius: 0,
        width: "100%",
        backgroundColor: bgColor || "#30373f",
        padding: "10px",
      }}
    >
      <Link
        to={link ? `/${link}` : "/404"}
        animation={animation}
        animationDuration={animationDuration}
      >
        <Typography
          animation={animation ? animation : "fade-right"}
          animationDuration={animationDuration ? animationDuration : "1400"}
        >
          {" "}
          {btnLabel}
        </Typography>
      </Link>
    </Button>
  );
};

export default CustomButton
