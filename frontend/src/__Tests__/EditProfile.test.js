import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditProfile from '../components/SettingsComp/EditProfile';

describe('EditProfile Component', () => {
  test('renders Edit Profile button when not in editing mode', () => {
    const mockUser = {
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      email: 'john.doe@example.com',
      _id: '12345'
    };

    render(<EditProfile user={mockUser} />);

    const editButton = screen.getByRole('button', { name: /edit profile/i });
    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveClass('edit-profile-button');
    expect(screen.queryByLabelText(/first name/i)).not.toBeInTheDocument();
  });

});