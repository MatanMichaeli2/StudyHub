import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../components/StudentComp/StudentPages/HomePage';

describe('HomePage Component', () => {
  test('renders welcome message for a logged-in user', () => {
    const mockUser = {
      firstName: 'John',
      lastName: 'Doe'
    };

    render(<HomePage user={mockUser} />);

    expect(screen.getByText(`Welcome, John Doe!`)).toBeInTheDocument();
    expect(screen.getByText('What would you like to do today?')).toBeInTheDocument();
    expect(screen.getByText('Registered Study Groups')).toBeInTheDocument();
    expect(screen.getByText('You are not registered in any study groups.')).toBeInTheDocument();
  });

  test('renders welcome message for a guest user', () => {
    render(<HomePage />); // No user prop passed

    expect(screen.getByText('Welcome, Student!')).toBeInTheDocument();
    expect(screen.getByText('What would you like to do today?')).toBeInTheDocument();
    expect(screen.getByText('Registered Study Groups')).toBeInTheDocument();
    expect(screen.getByText('You are not registered in any study groups.')).toBeInTheDocument();
  });
});
