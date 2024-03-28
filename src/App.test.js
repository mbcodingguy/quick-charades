import { render, screen } from '@testing-library/react';
import App from './App';

test('renders starting text', () => {
  render(<App />);
  const textElement = screen.getByText(/Quick Charades! Click to start. All images from openclipart.org/i);
  expect(textElement).toBeInTheDocument();
});
