import { Typography,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CustomButton = ({btnLabel,textColor, bgColor, bgHoverColor, link}) => {
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
      padding:"10px"
    }}
    >
   <Link to={link? `/${link}` : '/404'}>
      <Typography> {btnLabel}</Typography>
      </Link>
   
  </Button>
  )
}

export default CustomButton
