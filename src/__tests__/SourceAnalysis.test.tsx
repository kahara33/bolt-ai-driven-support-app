import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SourceAnalysis from '../pages/SourceAnalysis';

describe('SourceAnalysis', () => {
  test('renders upload form', () => {
    render(<SourceAnalysis />);
    expect(screen.getByText('Source Code Analysis')).toBeInTheDocument();
    expect(screen.getByText('Upload Source Files')).toBeInTheDocument();
    expect(screen.getByText('Analyze Source')).toBeInTheDocument();
  });

  test('handles file selection', () => {
    render(<SourceAnalysis />);
    const input = screen.getByLabelText('Upload Source Files');
    const file = new File(['console.log("test")'], 'test.js', { type: 'text/javascript' });
    fireEvent.change(input, { target: { files: [file] } });
    expect(screen.getByText('test.js')).toBeInTheDocument();
  });

  test('submits form', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<SourceAnalysis />);
    const submitButton = screen.getByText('Analyze Source');
    fireEvent.click(submitButton);
    expect(consoleSpy).toHaveBeenCalledWith('Files to analyze:', []);
  });
});