/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App';

test('should render header Ticker', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Ticker/i);
  expect(linkElement).toBeInTheDocument();
});
