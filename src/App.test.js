import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders fizzbuzz', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fizz Buzz/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders search with input box', () => {
  render(<App />);
  fireEvent.change(screen.getByTitle(/search/i), {target: {value: 1}})
  const answerElement = screen.getByTitle(/answer/i);
  expect(answerElement).toHaveValue("1");
});

test('renders search with input box and return Fizz when given 3', () => {
  render(<App />);
  fireEvent.change(screen.getByTitle(/search/i), {target: {value: 3}})
  const answerElement = screen.getByTitle(/answer/i);
  expect(answerElement).toHaveValue("Fizz");
});
