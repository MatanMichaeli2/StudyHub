// setupTests.js

import '@testing-library/jest-dom'; // Import jest-dom to extend Jest with custom matchers for DOM elements
//-----------------------------------------------------------------///
//Tomer unit test
// Example test file for Navbar component

import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('Navbar renders correctly', () => {
  render(<Navbar />);
  const homeLink = screen.getByText('Home');
  const studyGroupsLink = screen.getByText('Study Groups');

  expect(homeLink).toBeInTheDocument();
  expect(studyGroupsLink).toBeInTheDocument();
});

//-----------------------------------------------------------------///
