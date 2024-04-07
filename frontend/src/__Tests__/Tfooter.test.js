import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/TeacherComponents/Tfooter';
import { BrowserRouter } from 'react-router-dom';

// Mock the useNavigate hook
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('Footer Component', () => {
  test('renders footer content and logout button', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    expect(screen.getByText('© All Rights Reserved StudyHub')).toBeInTheDocument();
    expect(screen.getByText('© StudyHub')).toBeInTheDocument();
    const logoutButton = screen.getByRole('button', { name: 'Logout' });
    expect(logoutButton).toHaveStyle('backgroundColor: #ff0000');
    expect(logoutButton).toHaveStyle('color: #fff');
    expect(logoutButton).toHaveStyle('padding: 10px 20px');
    expect(logoutButton).toHaveStyle('borderRadius: 5px');
    expect(logoutButton).toHaveStyle('cursor: pointer');
  });

  test('navigates to landing page on logout', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const logoutButton = screen.getByRole('button', { name: 'Logout' });
    fireEvent.click(logoutButton);
    expect(mockedNavigate).toHaveBeenCalledWith('/');
  });
});
