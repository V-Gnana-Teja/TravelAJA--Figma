import React from "react";
import ServicesNavbar from "./components/ServicesNavbar";
import ServiceHero from "./components/ServiceHero";
import ServiceBenefits from "./components/ServiceBenefits";
import ServiceFooter from "./components/ServiceFooter";

const Services = () => {
  return (
    <div>
      <ServicesNavbar />
      <ServiceHero />
      <ServiceBenefits />
      <ServiceFooter />
    </div>
  );
};

export default Services;
