import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingPage from '../pages/landing/LandingPage';
import HeroSection from '../components/LandingPage/HeroSection';
import AboutSection from '../components/LandingPage/AboutSection';
import ServicesSection from '../components/LandingPage/ServiceSection';
import ContactSection from '../components/LandingPage/ContactSection';

// Mocking the child components
jest.mock('../components/LandingPage/HeroSection', () => () => <div data-testid="hero-section"></div>);
jest.mock('../components/LandingPage/AboutSection', () => () => <div data-testid="about-section"></div>);
jest.mock('../components/LandingPage/ServiceSection', () => () => <div data-testid="services-section"></div>);
jest.mock('../components/LandingPage/ContactSection', () => () => <div data-testid="contact-section"></div>);

describe('LandingPage Component', () => {
  it('renders all sections correctly', () => {
    const { getByTestId } = render(<LandingPage />);

    expect(getByTestId('hero-section')).toBeInTheDocument();
    expect(getByTestId('about-section')).toBeInTheDocument();
    expect(getByTestId('services-section')).toBeInTheDocument();
    expect(getByTestId('contact-section')).toBeInTheDocument();
  });
});