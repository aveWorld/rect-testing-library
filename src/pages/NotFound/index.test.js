import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NotFound from './index';
import '@testing-library/jest-dom/extend-expect';

test('404 Page has Not Found text', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <NotFound />
    </Router>
  );
  const notFoundText = screen.getByText(/Not Found/i);
  expect(notFoundText).toBeInTheDocument();
});

test('404 Page has navigation with href = /', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <NotFound />
    </Router>
  );
  const notFoundNav = screen.getByRole('link');
  expect(notFoundNav).toBeInTheDocument();
  expect(notFoundNav).toHaveAttribute('href', '/');
});
