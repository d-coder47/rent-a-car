import React from "react";
import { Box } from "@mui/material";
import PreHeader from "../Header/PreHeader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { HEADER_HEIGHT, PRE_HEADER_HEIGHT } from "../../constants";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          zIndex: 1001,
          marginBottom: "10px",
        }}
      >
        <PreHeader />
        <Header />
      </Box>

      <Box
        sx={{
          marginTop: {
            xs: +HEADER_HEIGHT.replace("px", "") + "px",
            sm: +HEADER_HEIGHT.replace("px", "") + "px",
            md: +HEADER_HEIGHT.replace("px", "") + "px",
            lg:
              +HEADER_HEIGHT.replace("px", "") +
              +PRE_HEADER_HEIGHT.replace("px", "") +
              "px",
            xl:
              +HEADER_HEIGHT.replace("px", "") +
              +PRE_HEADER_HEIGHT.replace("px", "") +
              "px",
          },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
