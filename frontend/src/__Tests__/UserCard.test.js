import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserCard from '../components/AdminComp/UserCard';

describe('UserCard Component', () => {
  const mockUser = {
    username: 'testUser',
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser@example.com',
  };

  test('displays user information', () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByText(`Username: ${mockUser.username}`)).toBeInTheDocument();
    expect(screen.getByText(`First Name: ${mockUser.firstName}`)).toBeInTheDocument();
    expect(screen.getByText(`Last Name: ${mockUser.lastName}`)).toBeInTheDocument();
    expect(screen.getByText(`Email: ${mockUser.email}`)).toBeInTheDocument();
  });
});
