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
      <PreHeader />
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
