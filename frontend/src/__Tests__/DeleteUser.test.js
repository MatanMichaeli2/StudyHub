import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteUser from '../components/SettingsComp/DeleteUser';

describe('DeleteUser Component', () => {
  test('renders delete account button and responds to click event', () => {
    const onDeleteMock = jest.fn();
    render(<DeleteUser onDelete={onDeleteMock} />);

    const deleteButton = screen.getByRole('button', { name: 'Delete Account' });
    expect(deleteButton).toBeInTheDocument();
    
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });
});
