import { Box } from "@mui/material";
import PreHeader from "../components/Header/PreHeader";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQs from "../components/FAQs/FAQs";
import Engagement from "../components/Engagement/Engagement";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column">
      <PreHeader />
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQs />
      <Engagement />
    </Box>
  );
};

export default Home;
