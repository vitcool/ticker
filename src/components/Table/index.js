import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cell from 'components/Cell';
import useInterval from 'hooks/useInterval';

import { getMatrixData } from 'modules/matrix/selectors';
import { tick } from 'modules/matrix/actions';

import { TICK_TIME } from 'config';

import styles from './index.module.scss';

const Table = () => {
  const matrixData = useSelector(getMatrixData);
  const dispatch = useDispatch();

  useInterval(() => {
    dispatch(tick());
  }, TICK_TIME);

  return (
    <div className={styles.tableWrapper}>
      <table>
        <tbody>
          {matrixData.map((rows, rowIndex) => (
            <tr key={rowIndex}>
              {rows.map((row, colIndex) => {
                const isLive = Boolean(matrixData[rowIndex][colIndex]);

                return <Cell isLive={isLive} key={`${rowIndex}-${colIndex}`} />;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
