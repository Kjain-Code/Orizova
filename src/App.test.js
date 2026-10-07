import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Orizova homepage', () => {
  render(<App />);
  const logos = screen.getAllByAltText(/orizova digital/i);
  expect(logos.length).toBeGreaterThan(0);
});
