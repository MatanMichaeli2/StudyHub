
import { getPasswordStrength } from "./Registration";
import { render, fireEvent } from '@testing-library/react';
import Registration from './Registration';



test("getPasswordStrength", () => {
  expect(getPasswordStrength("pass")).toBe(1);
  expect(getPasswordStrength("password")).toBe(2);
  expect(getPasswordStrength("Password")).toBe(3);
  expect(getPasswordStrength("Password1")).toBe(4);
  expect(getPasswordStrength("Password1!")).toBe(5);
});

//AI

describe('Registration form', () => {
 it('should show or hide fields based on role selection', () => {
    const { getByText, queryByText } = render(<Registration />);
    
    // Initially, fields should be hidden
    expect(queryByText('First name:')).toBeNull();
    
    // Selecting a role should show the fields
    fireEvent.change(getByText('Choose type:'), { target: { value: 'student' } });
    expect(getByText('First name:')).toBeInTheDocument();
    
    // Selecting "default" should hide the fields again
    fireEvent.change(getByText('Choose type:'), { target: { value: 'default' } });
    expect(queryByText('First name:')).toBeNull();
 });
});




describe('Form submission', () => {
 it('should prevent submission with invalid data', async () => {
    const { getByText, getByLabelText } = render(<Registration />);
    
    // Attempt to submit the form with invalid data
    fireEvent.change(getByLabelText('Username:'), { target: { value: 'a' } }); // Too short
    fireEvent.click(getByText('Sign up'));
    
    // Expect an alert to be shown
    expect(window.alert).toHaveBeenCalledWith('Username too short');
 });
});


describe('Form validation', () => {
 it('should prevent form submission when fields are empty', () => {
    const { getByText, getByLabelText } = render(<Registration />);
    
    // Simulate form submission without filling in any data
    fireEvent.click(getByText('Sign up'));
    
    // Check that the form submission was prevented
    // Assuming there's a message or a class that indicates the form submission was unsuccessful
    // This could be an error message or a specific class on the submit button
    expect(getByText('Please fill in all fields')).toBeInTheDocument();
 });

 it('should prevent form submission when password does not meet criteria', () => {
    const { getByText, getByLabelText } = render(<Registration />);
    
    // Fill in the form with some data, but with a weak password
    fireEvent.change(getByLabelText('Username:'), { target: { value: 'JohnDoe' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'weak' } });
    
    // Simulate form submission
    fireEvent.click(getByText('Sign up'));
    
    // Check that the form submission was prevented
    // Assuming there's a message or a class that indicates the password does not meet the criteria
    expect(getByText('Password must be at least 8 characters long')).toBeInTheDocument();
 });
});
