import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface MUIThemeInterface {
  children: ReactNode;
}

const MuiTheme = ({ children }: MUIThemeInterface) => {
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
      },
      h2: {
        fontSize: "24px",
        fontWeight: 400,
      },
      subtitle1: {
        fontSize: "16px",
        fontWeight: 400,
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
