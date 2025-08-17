import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Service from "./components/Service";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <About />
      <Events />
      <Gallery />
      <WhyUs />
      <Service />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
