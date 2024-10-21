import { ReactNode } from "react";
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
        fontSize: "56px",
        [breakpoints.down("sm")]: { fontSize: "28px" },
        [breakpoints.between("sm", "md")]: { fontSize: "42px" },
        [breakpoints.between("md", "lg")]: { fontSize: "48px" },
        [breakpoints.between("lg", "xl")]: { fontSize: "48px" },
      },
      h2: {
        fontWeight: 700,
        lineHeight: 1.3,
        fontSize: "40px",
        [breakpoints.down("sm")]: { fontSize: "24px" },
        [breakpoints.between("sm", "md")]: { fontSize: "32px" },
        [breakpoints.between("md", "lg")]: { fontSize: "36px" },
      },
      h3: {
        fontWeight: 600,
        lineHeight: 1.4,
        fontSize: "24px",
        [breakpoints.down("md")]: { fontSize: "20px" },
        [breakpoints.down("lg")]: { fontSize: "20px" },
        [breakpoints.down("xl")]: { fontSize: "20px" },
        [breakpoints.up("xl")]: { fontSize: "22px" },
      },
      h5: {
        fontWeight: 600,
        lineHeight: 1.4,
        fontSize: "22px",
        [breakpoints.down("md")]: { fontSize: "14px" },
        [breakpoints.down("lg")]: { fontSize: "16px" },
        [breakpoints.between("lg", "xl")]: { fontSize: "20px" },
      },
      body1: {
        fontWeight: 400,
        lineHeight: 1.6,
        fontSize: "20px",
        [breakpoints.down("sm")]: { fontSize: "16px" },
        [breakpoints.between("sm", "lg")]: { fontSize: "18px" },
      },
      body2: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: "16px",
      },
      subtitle1: {
        fontWeight: 400,
        lineHeight: 1.5,
        fontSize: "20px",
        [breakpoints.down("sm")]: { fontSize: "14px", lineHeight: 1.4 },
        [breakpoints.between("sm", "lg")]: { fontSize: "18px" },
      },
      subtitle2: {
        fontWeight: 400,
        lineHeight: 1.4,
        fontSize: "16px",
      },
      caption: {
        fontWeight: 400,
        lineHeight: 1.4,
        fontSize: "12px",
      },
      overline: {
        fontWeight: 400,
        lineHeight: 1.5,
        textTransform: "uppercase",
        fontSize: "10px",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
