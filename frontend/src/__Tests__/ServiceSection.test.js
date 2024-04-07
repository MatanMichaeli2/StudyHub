import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServicesSection from '../components/LandingPage/ServiceSection';

describe('ServicesSection Component', () => {
  test('renders services section with expected headings and descriptions', () => {
    render(<ServicesSection />);

    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Group study sessions' })).toBeInTheDocument();
    expect(screen.getByText('Join our collaborative study sessions with peers to enhance your learning and exchange knowledge.')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Mentoring and tutoring' })).toBeInTheDocument();
    expect(screen.getByText('Get personalized mentoring and tutoring from experienced professionals to improve your academic performance.')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Exam preparation support' })).toBeInTheDocument();
    expect(screen.getByText('Receive guidance and resources to excel in your exams through our comprehensive exam preparation support.')).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute('alt', 'Group Study Sessions');
    expect(images[1]).toHaveAttribute('alt', 'Mentoring and Tutoring');
    expect(images[2]).toHaveAttribute('alt', 'Exam Preparation Support');
  });
});
