import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Menu from '../components/StudentComp/Menu';

// Mocking Link component
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }) => <div>{children}</div>, // Render Link as a div for testing
}));

describe('Menu Component', () => {
  it('renders menu with links', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );

    expect(screen.getByText('Home page')).toBeInTheDocument();
    expect(screen.getByText('Create Study Group')).toBeInTheDocument();
    expect(screen.getByText('User settings')).toBeInTheDocument();
  });
});
