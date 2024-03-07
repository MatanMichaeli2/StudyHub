//This file will contain the logic and JSX for your landing page components.
import React from 'react';
import Navbar from '../../components/LandingPage/Navbar';
import HeroSection from '../../components/LandingPage/HeroSection';
import AboutSection from '../../components/LandingPage/AboutSection';
import ServicesSection from '../../components/LandingPage/ServiceSection';
import ContactSection from '../../components/LandingPage/ContactSection';
import AdminDisplay from '../../components/LandingPage/AdminDisplay';
import './Landing.css'

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

      <AdminDisplay />
    </div>
  );
}

export default LandingPage;
