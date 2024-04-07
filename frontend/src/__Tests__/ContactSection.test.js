import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactSection from '../components/LandingPage/ContactSection';

describe('ContactSection Component', () => {
  test('renders without crashing', () => {
    render(<ContactSection />);
    const sectionElement = screen.getByRole('heading', { name: /reach out today/i });
    expect(sectionElement).toBeInTheDocument();
  });

  test('contains the email address', () => {
    render(<ContactSection />);
    expect(screen.getByText(/StudyHubProject@gmail.com/i)).toBeInTheDocument();
  });

  test('displays the correct heading', () => {
    render(<ContactSection />);
    const headingElement = screen.getByRole('heading', { name: /reach out today/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('contains the message about connecting soon', () => {
    render(<ContactSection />);
    const connectMessage = screen.getByText(/We look forward to connecting with you soon!/i);
    expect(connectMessage).toBeInTheDocument();
  });
});
