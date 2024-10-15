import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  test('renders header', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Analyze Source')).toBeInTheDocument();
    expect(screen.getByText('Generate Docs')).toBeInTheDocument();
    expect(screen.getByText('Generate Tests')).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Source Code Analyzer/)).toBeInTheDocument();
  });

  test('renders home page by default', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Welcome to Source Code Analyzer')).toBeInTheDocument();
  });
});