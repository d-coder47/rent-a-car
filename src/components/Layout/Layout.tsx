import React from "react";
import { Box } from "@mui/material";
import PreHeader from "../Header/PreHeader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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

      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
