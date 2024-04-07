import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/AdminComp/NavbarA';

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useNavigate: () => jest.fn().mockImplementation(() => ({})),
}));

describe('Navbar Component', () => {
  test('renders Navbar and navigates to settings', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Check if the logo is rendered
    expect(screen.getByAltText('StudyHub Logo')).toBeInTheDocument();

    // Check if the settings link is rendered
    const settingsLink = screen.getByText('Settings');
    expect(settingsLink).toBeInTheDocument();


    fireEvent.click(settingsLink);
  });
});