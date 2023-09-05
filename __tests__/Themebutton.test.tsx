// Themebutton.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Themebutton from '@/app/components/Themebutton'; // Update this import path to where your Themebutton component lives

// Mock the `useTheme` hook from 'next-themes'
jest.mock('next-themes', () => ({
  useTheme: jest.fn().mockReturnValue({
    setTheme: jest.fn(),
    resolvedTheme: 'light',
  }),
}));

describe('<Themebutton />', () => {
  it('should render a button after mounting', () => {
    const { rerender } = render(<Themebutton />);
    rerender(<Themebutton />);
    const buttonElement = screen.getByRole('button', { name: /Toggle theme/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should toggle theme when clicked', () => {
    const setTheme = jest.fn();
    require('next-themes').useTheme.mockReturnValue({
      setTheme,
      resolvedTheme: 'light',
    });

    const { rerender } = render(<Themebutton />);
    rerender(<Themebutton />);
    const buttonElement = screen.getByRole('button', { name: /Toggle theme/i });

    fireEvent.click(buttonElement);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
