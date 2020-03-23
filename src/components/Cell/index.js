import React from 'react';

import styles from './index.module.scss';

type Props = {
  isLive: boolean,
};

const Cell = (props: Props) => {
  const { isLive } = props;

  return (
    <>
      {isLive ? (
        <td className={styles.activeCell} />
      ) : (
        <td className={styles.cell} />
      )}
    </>
  );
};

export default Cell;
