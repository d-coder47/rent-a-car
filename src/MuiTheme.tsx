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
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
