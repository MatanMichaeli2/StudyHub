import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter, BrowserRouter } from "react-router-dom";

test('Login component logs message when username or password is empty', () => {
    // Mock console.log
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    // Render the Login component
    const { getByText } = render(   <BrowserRouter>
            <Login />
        </BrowserRouter>
    );

    // Submit the form without filling in the fields
    fireEvent.click(getByText('התחבר'));

    // Check if a console log message is shown
    expect(consoleSpy).toHaveBeenCalledWith('Please enter both username and password.');

    // Restore the original console.log method
    consoleSpy.mockRestore();
});
