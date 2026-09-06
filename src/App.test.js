import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('shows portfolio content and working section destinations', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hi, I’m Adnane');
  expect(screen.getAllByRole('link', { name: /view source/i })).toHaveLength(4);
  for (const link of screen.getAllByRole('link')) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) expect(document.querySelector(href)).toBeInTheDocument();
  }
  expect(screen.getByRole('link', { name: /download résumé/i })).toHaveAttribute('download', 'Adnane_Bejja_Resume.pdf');
});

test('mobile navigation opens and closes after selecting a section', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
  expect(screen.getByRole('button', { name: 'Close navigation' })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getByRole('link', { name: /01 about/i }));
  expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
});
