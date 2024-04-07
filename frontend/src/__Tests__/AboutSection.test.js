import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from '../components/LandingPage/AboutSection';

describe('AboutSection Component', () => {
  test('renders About us section with text and image', () => {
    render(<AboutSection />);

    expect(screen.getByRole('heading', { name: 'About us' })).toBeInTheDocument();
    expect(screen.getByText('Welcome to StudyHub, your premier destination for study groups online. Our mission is to provide a collaborative and productive environment for students to excel academically.')).toBeInTheDocument();
    expect(screen.getByText('At StudyHub, we believe in the power of teamwork and knowledge sharing. Join us and elevate your learning experience with like-minded individuals who are committed to achieving academic success.')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Study group' })).toHaveAttribute('src', '../../images/about-us-pic.webp');
    expect(screen.getByRole('img', { name: 'Study group' })).toHaveStyle('height: 400px');
    expect(screen.getByRole('img', { name: 'Study group' })).toHaveStyle('width: 600px');
  });
});
