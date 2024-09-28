import { Box } from "@mui/material";
import PreHeader from "../components/Header/PreHeader";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column">
      <PreHeader />
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </Box>
  );
};

export default Home;
