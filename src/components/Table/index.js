// @flow

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cell from 'components/Cell';
import useInterval from 'hooks/useInterval';

import { getMatrixData } from 'modules/matrix/selectors';
import { tick } from 'modules/matrix/actions';

import { TABLE_SIZE, TICK_TIME } from 'config';

import styles from './index.module.scss';

const Table = () => {
  const matrixData = useSelector(getMatrixData);
  const dispatch = useDispatch();

  useInterval(() => {
    dispatch(tick());
  }, TICK_TIME);

  const rows = [];
  for (let rowIndex = 0; rowIndex < TABLE_SIZE; rowIndex++) {
    const cells = [];
    for (let colIndex = 0; colIndex < TABLE_SIZE; colIndex++) {
      const isLive = Boolean(matrixData[rowIndex][colIndex]);
      cells.push(<Cell isLive={isLive} key={`${rowIndex}-${colIndex}`} />);
    }
    rows.push(<tr key={rowIndex}>{cells}</tr>);
  }

  return (
    <div className={styles.tableWrapper}>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
