//This file will contain the logic and JSX for your landing page components.
import React from 'react';
import Navbar from './LandingPage/Navbar';
import HeroSection from './LandingPage/HeroSection';
import AboutSection from './LandingPage/AboutSection';
import ServicesSection from './LandingPage/ServiceSection';
import ContactSection from './LandingPage/ContactSection';

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <HeroSection />

      {/* About section */}
      <AboutSection />

      {/* Services section */}
      <ServicesSection />

      {/* Contact section */}
      <ContactSection />
    </div>
  );
}

export default LandingPage;
