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
      primary: {
        main: "#FE9E00",
      },
      secondary: {
        main: "#0C666E",
      },
    },

    typography: {
      fontFamily: "Istok Web, Roboto, Arial, sans-serif",
      h1: {
        fontSize: "48px",
        fontWeight: 700,
        lineHeight: 1.2,
        fontStyle: "normal",
        color: "#000",

        [breakpoints.down("xs")]: {
          fontSize: "22px",
        },
        [breakpoints.up("xs")]: {
          fontSize: "22px",
        },
        [breakpoints.up("sm")]: {
          fontSize: "32px ",
        },
        [breakpoints.up("md")]: {
          fontSize: "36px ",
        },
        [breakpoints.up("lg")]: {
          fontSize: "36px",
        },

        [breakpoints.up("xl")]: {
          fontSize: "48px",
        },
      },
      h2: {
        fontSize: "24px",
        fontWeight: 400,
      },
      h3: {
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "28px",
        [breakpoints.down("xs")]: {
          fontSize: "16px",
        },
        [breakpoints.up("xs")]: {
          fontSize: "16px",
        },
        [breakpoints.up("sm")]: {
          fontSize: "16px",
        },
        [breakpoints.up("md")]: {
          fontSize: "16px",
        },
        [breakpoints.up("lg")]: {
          fontSize: "18px",
        },

        [breakpoints.up("xl")]: {
          fontSize: "20px",
        },
      },
      subtitle1: {
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "36px",
        color: "#4f4c4c",
        [breakpoints.down("xs")]: {
          fontSize: "16px",
        },
        [breakpoints.up("xs")]: {
          fontSize: "16px",
        },
        [breakpoints.up("sm")]: {
          fontSize: "18px",
        },
        [breakpoints.up("md")]: {
          fontSize: "20px",
        },
        [breakpoints.up("lg")]: {
          fontSize: "24px",
        },

        [breakpoints.up("xl")]: {
          fontSize: "24px",
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
