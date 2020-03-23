/* eslint-disable no-undef */
import React from 'react';
import Cell from 'components/Cell';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('should render alive cell as white', () => {
  const { container } = render(
    <table>
      <tbody>
        <tr>
          <Cell isLive={false} />
        </tr>
      </tbody>
    </table>,
  );
  expect(container.firstChild.firstChild.firstChild.firstChild).toHaveClass(
    'cell',
  );
});

test('should render live cell as black', () => {
  const { container } = render(
    <table>
      <tbody>
        <tr>
          <Cell isLive />
        </tr>
      </tbody>
    </table>,
  );
  expect(container.firstChild.firstChild.firstChild.firstChild).toHaveClass(
    'activeCell',
  );
});
