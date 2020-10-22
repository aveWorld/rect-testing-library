import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import DropDown from './index';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import ViewStore from '../../../store/ViewStore';

const viewStore = new ViewStore();

test('dropdown to have menu after click', () => {
  render(<DropDown viewStore={viewStore} />);
  const { networkList } = viewStore;
  userEvent.click(screen.getByText(/Dev-Net/i));
  for (let i = 0; i < networkList.length; i++) {
    let items = screen.getAllByText(networkList[i].label);
    if (Array.isArray(items)) {
      for (let item of items) {
        expect(item).toBeInTheDocument();
      }
    } else expect(items).toBeInTheDocument();
  }
});
