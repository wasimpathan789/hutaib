import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let baseTheme = createTheme();

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  customPadding: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
  },
  typography: {
    h1: {
      fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
      color: "#ffffff",
      fontWeight: 600,
      marginBottom: "28px",
      fontSize: "4rem",
      lineHeight: 1.2,
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "2.5rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "3rem",
      },
      [baseTheme.breakpoints.up("lg")]: {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
      color: "#ffffff",
      fontWeight: 600,
      marginBottom: "24px",
      fontSize: "1.75rem",
      lineHeight: 1.3,
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "2rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "2.5rem",
      },
      [baseTheme.breakpoints.up("lg")]: {
        fontSize: "3rem",
      },
    },
    h3: {
      fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
      color: "#30373f",
      fontWeight: 600,
      marginBottom: "20px",
      fontSize: "3rem",
      lineHeight: 1.4,
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1.75rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "2.5rem",
      },
      [baseTheme.breakpoints.up("lg")]: {
        fontSize: "3rem",
      },
    },
    h4: {
      fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
      color: "#30373f",
      fontWeight: 600,
      fontSize: "28px",
      lineHeight: 1.4,
      letterSpacing: 1,
    },
    h5: {
      fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
      color: "#30373f",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
      color: "#30373f",
      fontWeight: 400,
      fontSize: "16px",
    },
    body1: {
      fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
      color: "#616161",
      fontSize: "15px",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
      color: "#ffffff",
      fontSize: "15px",
      lineHeight: 1.5,
    },
    footer: {
      fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
      color: "#FFFFFF",
      fontSize: "15px",
      lineHeight: 1.5,
    },
  },
  palette: {
    primary: {
      main: "#ffba00",
    },
    secondary: {
      main: "#30373f",
    },
    text: {
      primary: "#6161f",
    },
    light: {
      main: "#ffffff",
    },
    gray: {
      // main: "rgba(255, 255, 255, 0.1)",
      main: "#454B53",
    },
  },
  animationSpeed: {
    slow: "1000",
    medium: "1400",
    fast: "1800",
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
