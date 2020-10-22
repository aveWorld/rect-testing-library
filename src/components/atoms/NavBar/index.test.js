import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavBar from './index';
import '@testing-library/jest-dom/extend-expect';

const links = [
  {
    href: '/',
    title: 'download wallet',
  },
  {
    href: '/',
    title: 'spacemesh home',
  },
];

jest.mock('nanoid', () => {
  let value = 0;
  return { nanoid: () => value++ };
});

test('navbar displays links propperly', () => {
  render(<NavBar links={links} />);
  for (let i = 0; i < links.length; i++) {
    let link = screen.getByText(links[i].title);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `${links[i].href}`);
  }
});
