import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQs from "../components/FAQs/FAQs";
import Engagement from "../components/Engagement/Engagement";
import Contact from "../components/Contact/Contact";
import Gallery from "../components/CarGallery/GallerySection";
import Layout from "../components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQs />
      <Gallery />
      <Contact />
      <Engagement />
    </Layout>
  );
};

export default Home;
