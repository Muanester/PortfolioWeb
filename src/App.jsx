import React, { useRef } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Transition from "./assets/Transition";

const App = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Transition />
      <Header />
      <Navbar />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Services ref={servicesRef} />
      <Portfolio ref={portfolioRef} />
      <Testimonials />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
};

export default App;
