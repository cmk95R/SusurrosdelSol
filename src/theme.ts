"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#C75B39",
      light: "#D97B5C",
      dark: "#9A4024",
      contrastText: "#FFF8F0",
    },
    secondary: {
      main: "#D4A017",
      light: "#E5C050",
      dark: "#A67C10",
      contrastText: "#2C1810",
    },
    info: {
      main: "#5B8DB8",
      light: "#8BB4D4",
      dark: "#3A6B8F",
      contrastText: "#FFF8F0",
    },
    success: {
      main: "#6B8E5E",
      light: "#8FB380",
      dark: "#4E6E43",
      contrastText: "#FFF8F0",
    },
    background: {
      default: "#F5E6D3",
      paper: "#FFF8F0",
    },
    text: {
      primary: "#2C1810",
      secondary: "#6B4E3D",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Josefin Sans', 'Inter', sans-serif",
      fontWeight: 400,
      letterSpacing: "0.03em",
    },
    h6: {
      fontFamily: "'Josefin Sans', 'Inter', sans-serif",
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: "'Josefin Sans', 'Inter', sans-serif",
      fontWeight: 300,
      letterSpacing: "0.04em",
    },
    button: {
      fontFamily: "'Inter', 'Roboto', sans-serif",
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
    overline: {
      fontFamily: "'Montserrat', 'Inter', sans-serif",
      fontWeight: 700,
      letterSpacing: "0.2em",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: "14px 36px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "0 8px 32px rgba(44, 24, 16, 0.08)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
