import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from '../components/SettingsComp/SettingsHeading';

describe('Heading Component', () => {
  test('renders Settings heading', () => {
    render(<Heading />);

    const headingElement = screen.getByRole('heading', { name: 'Settings' });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('heading');
  });
});
