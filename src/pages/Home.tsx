import { Box } from "@mui/material";
import PreHeader from "../components/Header/PreHeader";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column">
      <PreHeader />
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        gap="4rem"
        sx={{ marginLeft: "60px" }}
      >
        <Hero />
        <Services />
      </Box>
    </Box>
  );
};

export default Home;
