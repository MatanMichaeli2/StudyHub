import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar Component', () => {
  test('renders navbar with links and logo', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByRole('img', { name: 'StudyHub Logo' })).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Study Groups' })).toHaveAttribute('href', '/study-groups');
    expect(screen.queryByText('Settings')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Log in' })).toHaveAttribute('href', '/login');
  });

  test('renders settings link when user is logged in', () => {
    render(
      <BrowserRouter>
        <Navbar user={{ name: 'Test User' }} />
      </BrowserRouter>
    );

    expect(screen.getByRole('link', { name: 'Settings' })).toHaveAttribute('href', '/settings');
    expect(screen.queryByText('Log in')).not.toBeInTheDocument();
  });
});
