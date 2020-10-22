import React from 'react';
import { render, screen } from '@testing-library/react';
import ValueHolder from './index';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const mock = [
  {
    value: '50 MB',
    delimiter: undefined,
    units: undefined,
  },
  {
    value: '$%^',
    delimiter: undefined,
    units: undefined,
  },
  {
    value: '12312312312312312312312312313',
    delimiter: undefined,
    units: undefined,
  },
  {
    value: '_ASDasd_',
    delimiter: undefined,
    units: undefined,
  },
];
for (const mockItem of mock) {
  test('ValueHolder should display the value', () => {
    render(
      <ValueHolder
        value={mockItem.value}
        delimiter={mockItem.delimiter}
        units={mockItem.valueUnit}
      />
    );
    expect(screen.getByText(mockItem.value)).toBeInTheDocument();
    expect(screen.getByText(mockItem.value)).toHaveClass('value-holder');
  });
}
