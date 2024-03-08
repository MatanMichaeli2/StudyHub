import React from 'react';
import { render } from '@testing-library/react';
import AdminDisplay from '../path/to/AdminDisplay'; 

test('renders admin display with user data', () => {
  const { getByText } = render(<AdminDisplay />);
  
  // Check if header is rendered
  expect(getByText('Admin Panel')).toBeInTheDocument();
});
  