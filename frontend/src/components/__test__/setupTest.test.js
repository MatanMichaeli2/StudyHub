// setupTests.js

import '@testing-library/jest-dom'; // Import jest-dom to extend Jest with custom matchers for DOM elements
//-----------------------------------------------------------------///
//Tomer unit test
// Example test file for Navbar component

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../TecherMainPage/Navbar';
import Footer from '../TecherMainPage/Footer.jsx';



test('Footer renders correctly', () => {
  // Render the Navbar component
  render(<Footer />);

  // Check if the "Home" link is rendered
  const something = screen.getByTestId('some-1');
  expect(something).toBeInTheDocument();
});
//test 2
test('renders Navbar component', () => {
  const { getByTestId } = render(<Navbar />);
  const navbarElement = getByTestId('home');
  expect(navbarElement).toBeInTheDocument();
});

//test 3
test('renders navigation links in Navbar component', () => {
  const { getByText } = render(<Navbar />);
  
  const homeLink = getByText('Home');
  const studyGroupsLink = getByText('Study Groups');
  // Add more links as needed
  
  expect(homeLink).toBeInTheDocument();
  expect(studyGroupsLink).toBeInTheDocument();
  // Add more expectations for additional links
});

//test 4

test('renders Footer component with correct copyright text', () => {
  const { getByText } = render(<Footer />);
  const copyrightText = getByText('© 2024 StudyHub. All rights reserved.');
  expect(copyrightText).toBeInTheDocument();
});





//-----------------------------------------------------------------///
