import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import TestGeneration from '../pages/TestGeneration';

describe('TestGeneration', () => {
  test('renders generate button', () => {
    render(<TestGeneration />);
    expect(screen.getByText('Test Case Generation')).toBeInTheDocument();
    expect(screen.getByText('Generate Test Cases')).toBeInTheDocument();
  });

  test('handles generate button click', async () => {
    jest.useFakeTimers();
    render(<TestGeneration />);
    const generateButton = screen.getByText('Generate Test Cases');
    fireEvent.click(generateButton);
    expect(screen.getByText('Generating...')).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByText('Generate Test Cases')).toBeInTheDocument();
    jest.useRealTimers();
  });
});