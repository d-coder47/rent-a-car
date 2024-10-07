import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

interface MUIThemeInterface {
  children: ReactNode;
}

const MuiTheme = ({ children }: MUIThemeInterface) => {
  const breakpoints = createBreakpoints({});

  const theme = createTheme({
    palette: {
      primary: { main: "#FE9E00" },
      secondary: { main: "#0C666E" },
    },

    typography: {
      fontFamily: "Istok Web, Roboto, Arial, sans-serif",

      h1: {
        fontWeight: 700,
        lineHeight: 1.2,
        fontStyle: "normal",
        color: "#000000",
        fontSize: "48px",
        [breakpoints.down("sm")]: { fontSize: "22px" },
        [breakpoints.between("sm", "md")]: { fontSize: "32px" },
        [breakpoints.between("md", "lg")]: { fontSize: "36px" },
      },

      h2: {
        fontWeight: 700,
        lineHeight: 1.3,
        color: "#000000",
        fontSize: "36px",
        [breakpoints.down("sm")]: { fontSize: "20px" },
        [breakpoints.between("sm", "md")]: { fontSize: "28px" },
        [breakpoints.between("md", "lg")]: { fontSize: "32px" },
      },
      h3: {
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "28px",
        fontSize: "20px",
        [breakpoints.down("md")]: { fontSize: "16px" },
        [breakpoints.between("lg", "xl")]: { fontSize: "18px" },
      },
      body1: {
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "26px",
        color: "#000000",
        fontSize: "16px",
        [breakpoints.down("sm")]: { fontSize: "14px" },
        [breakpoints.between("sm", "lg")]: { fontSize: "16px" },
      },
      subtitle1: {
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "36px",
        color: "#000000",
        fontSize: "24px",
        [breakpoints.down("sm")]: { fontSize: "12px", lineHeight: "26px" },
        [breakpoints.between("sm", "lg")]: { fontSize: "20px" },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
