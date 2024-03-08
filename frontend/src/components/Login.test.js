import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { act } from '@testing-library/react'; // Needed for async operations

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Your original test
test('Login component logs message when username or password is empty', () => {
  // Mock console.log
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  // Render the Login component
  const { getByText } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  // Submit the form without filling in the fields
  fireEvent.click(getByText('התחבר')); // Assuming 'התחבר' is the Hebrew for 'Submit'

  // Check if a console log message is shown
  expect(consoleSpy).toHaveBeenCalledWith('Please enter both username and password.');

  // Restore the original console.log method
  consoleSpy.mockRestore();
});

// AI unit test's
test('Login component displays alert for empty username or password', () => {
    jest.spyOn(window, 'alert').mockImplementationOnce(() => {}); // Mock alert
  
    const { getByText } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
  
    expect(window.alert).toHaveBeenCalledWith('Please enter both username and password.');
  
    window.alert.mockRestore(); // Restore original alert behavior
  });

  
  // test 2
  test('Login component clears username and password on successful login', () => {
  // Mock console.log (optional depending on implementation)
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  const username = 'testUser';
  const password = 'testPassword';

  const { getByText, getByLabelText } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  const usernameInput = getByLabelText('Username:');
  const passwordInput = getByLabelText('Password:');

  fireEvent.change(usernameInput, { target: { value: username } });
  fireEvent.change(passwordInput, { target: { value: password } });
  fireEvent.click(getByText('Submit'));

  // Optional: Check console for success message
  // expect(consoleSpy).toHaveBeenCalledWith('Login successful!');

  expect(usernameInput.value).toBe('');
  expect(passwordInput.value).toBe('');

  consoleSpy.mockRestore(); // Restore original console.log (if used)
});

// test 3
test('Login component navigates to register page on Register button click', () => {
const mockHistory = { push: jest.fn() }; // Mock useNavigate for redirection

  const { getByText } = render(
    <BrowserRouter>
      <Login navigate={mockHistory} />
    </BrowserRouter>
  );

  const registerButton = getByText('Register');
  fireEvent.click(registerButton);

  expect(mockHistory.push).toHaveBeenCalledWith('/register'); // Replace with your route
});

