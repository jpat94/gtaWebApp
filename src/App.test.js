import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const appContent = screen.getByText('Coming soon...');
  expect(appContent).toBeInTheDocument();
});
