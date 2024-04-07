import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminPage from '../pages/AdminMain/AdminMainPage';

// Mock child components and modules
jest.mock('../components/TeacherComponents/Tfooter.js', () => () => <div>Footer Mock</div>);
jest.mock('../components/AdminComp/NavbarA.js', () => () => <div>NavbarA Mock</div>);
jest.mock('../components/AdminComp/UserCard.js', () => ({ user }) => <div>UserCard Mock - {user.name}</div>);

describe('AdminPage Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          { _id: '1', name: 'User One' },
          { _id: '2', name: 'User Two' },
        ]),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('fetches users and displays them on the page', async () => {
    render(<AdminPage />);

    await waitFor(() => {
      expect(screen.getByText('UserCard Mock - User One')).toBeInTheDocument();
      expect(screen.getByText('UserCard Mock - User Two')).toBeInTheDocument();
    });

    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/users/all');
  });

  test('renders NavbarA and Footer', () => {
    render(<AdminPage />);

    expect(screen.getByText('NavbarA Mock')).toBeInTheDocument();
    expect(screen.getByText('Footer Mock')).toBeInTheDocument();
  });

  test('displays user list heading', () => {
    render(<AdminPage />);

    expect(screen.getByRole('heading', { name: "User's List:" })).toBeInTheDocument();
  });
});
