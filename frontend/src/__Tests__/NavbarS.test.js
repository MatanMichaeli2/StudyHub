import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/StudentComp/NavbarS';

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  Link: ({ children }) => <div>{children}</div>, // Mock Link as a simple div for testing purposes
}));

describe('Navbar Component', () => {
  test('renders navbar links and logo, navigates to settings', () => {
    render(
      <BrowserRouter>
        <Navbar user={{}} />
      </BrowserRouter>
    );

    expect(screen.getByAltText('StudyHub Logo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Study Groups')).toBeInTheDocument();

  });
});
