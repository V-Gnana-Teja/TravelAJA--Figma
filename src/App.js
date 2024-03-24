import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Testimonials />
    </div>
  );
}

export default App;
