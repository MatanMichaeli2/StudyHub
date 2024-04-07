import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Login from '../components/Login';

// Mock the useNavigate hook
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('Login Component', () => {
  beforeEach(() => {
    // Reset the mocked function before each test
    mockedNavigate.mockReset();
  });

  test('renders login form', () => {
    render(
      <BrowserRouter>
        <Login setUser={() => {}} />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/username:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('navigates to register page on "Register" button click', async () => {
    render(
      <BrowserRouter>
        <Login setUser={() => {}} />
      </BrowserRouter>
    );

    const registerButton = screen.getByRole('button', { name: /register/i });
    userEvent.click(registerButton);

    await waitFor(() => {
      expect(mockedNavigate).toHaveBeenCalledWith('/register');
    });
  });

});