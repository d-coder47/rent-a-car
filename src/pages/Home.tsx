import { Box } from "@mui/material";
import PreHeader from "../components/Header/PreHeader";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQs from "../components/FAQs/FAQs";
import Engagement from "../components/Engagement/Engagement";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column">
      <PreHeader />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQs />
      <Contact />
      <Engagement />
      <Footer />
    </Box>
  );
};

export default Home;
