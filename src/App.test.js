import { render, screen } from '@testing-library/react';
import FeedLinePage from './Components/FeedLinePage';

test('renders learn react link', () => {
  render(<FeedLinePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
