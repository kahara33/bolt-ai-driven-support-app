import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import DocumentGeneration from '../pages/DocumentGeneration';

describe('DocumentGeneration', () => {
  test('renders generate button', () => {
    render(<DocumentGeneration />);
    expect(screen.getByText('Design Document Generation')).toBeInTheDocument();
    expect(screen.getByText('Generate Documents')).toBeInTheDocument();
  });

  test('handles generate button click', async () => {
    jest.useFakeTimers();
    render(<DocumentGeneration />);
    const generateButton = screen.getByText('Generate Documents');
    fireEvent.click(generateButton);
    expect(screen.getByText('Generating...')).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByText('Generate Documents')).toBeInTheDocument();
    jest.useRealTimers();
  });
});