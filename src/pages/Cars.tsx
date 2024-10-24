import { Box, Typography } from "@mui/material";
import PreHeader from "../components/Header/PreHeader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Cars = () => {
  return (
    <Box display="flex" flexDirection="column">
      <PreHeader />
      <Header />
      <Typography>Cars page</Typography>
      <Footer />
    </Box>
  );
};

export default Cars;
