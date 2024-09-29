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
        color: "#000",
        fontSize: "48px",
        [breakpoints.down("sm")]: { fontSize: "22px" },
        [breakpoints.between("sm", "md")]: { fontSize: "32px" },
        [breakpoints.between("md", "lg")]: { fontSize: "36px" },
      },

      h2: {
        fontWeight: 500,
        lineHeight: 1.3,
        color: "#000",
        fontSize: "40px",
        [breakpoints.down("sm")]: { fontSize: "20px" },
        [breakpoints.between("sm", "md")]: { fontSize: "28px" },
        [breakpoints.between("md", "lg")]: { fontSize: "34px" },
      },
      h3: {
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "28px",
        fontSize: "20px",
        [breakpoints.down("md")]: { fontSize: "16px" },
        [breakpoints.between("lg", "xl")]: { fontSize: "18px" },
      },

      subtitle1: {
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "36px",
        color: "#4f4c4c",
        fontSize: "24px",
        [breakpoints.down("sm")]: { fontSize: "16px" },
        [breakpoints.between("sm", "lg")]: { fontSize: "20px" },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
