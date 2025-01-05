import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search input and list of items', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(/search/i);
  expect(searchInput).toBeInTheDocument();

  const listItems = screen.getAllByRole('listitem');
  expect(listItems.length).toBeGreaterThan(0);
});
