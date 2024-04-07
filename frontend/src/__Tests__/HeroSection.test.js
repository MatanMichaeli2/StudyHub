import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../components/LandingPage/HeroSection';
import { BrowserRouter } from 'react-router-dom';

// Mock the useNavigate hook
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('HeroSection Component', () => {
  test('renders correctly and contains expected content', () => {
    render(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { name: 'Elevate Your Learning Experience' })).toBeInTheDocument();
    expect(screen.getByText('Join our study group online, where collaborative learning and tailored mentorship pave your path to success.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Join Now' })).toBeInTheDocument();
  });

  test('navigates to the register page on button click', () => {
    render(
      <BrowserRouter>
        <HeroSection />
      </BrowserRouter>
    );

    const joinNowButton = screen.getByRole('button', { name: 'Join Now' });
    fireEvent.click(joinNowButton);

    expect(mockedNavigate).toHaveBeenCalledWith('/register');
  });
});
