import { Box } from "@mui/material";
import PreHeader from "../components/Header/PreHeader";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import About from "../components/About/About";

const Home = () => {
  return (
    <Box>
      <PreHeader />
      <Header />
      <Hero />
      <About />
    </Box>
  );
};

export default Home;
