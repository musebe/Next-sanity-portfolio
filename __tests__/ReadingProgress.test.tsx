import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ReadingProgress from '@/app/components/ReadingProgress';

Object.defineProperty(window, 'innerHeight', {
  writable: true,
  configurable: true,
  value: 900,
});

Object.defineProperty(document.documentElement, 'scrollHeight', {
  writable: true,
  configurable: true,
  value: 1800,
});

const fireScrollEvent = (scrollPosition: number) => {
  act(() => {
    // Wrap the state-changing logic in act
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: scrollPosition,
    });
    window.dispatchEvent(new Event('scroll'));
  });
};

describe('ReadingProgress', () => {
  it('should render progress bar with initial width 0%', () => {
    render(<ReadingProgress />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle('width: 0%');
  });

  it('should update progress bar width on scroll', async () => {
    // Make the test function async
    render(<ReadingProgress />);
    const progressBar = screen.getByTestId('progress-bar');

    fireScrollEvent(450);
    await act(async () => {
      // Wait for state updates to complete
      // Optional: additional logic or assertions could go here
    });
    expect(progressBar).toHaveStyle('width: 50%');

    fireScrollEvent(900);
    await act(async () => {
      // Optional: additional logic or assertions could go here
    });
    expect(progressBar).toHaveStyle('width: 100%');
  });
});
