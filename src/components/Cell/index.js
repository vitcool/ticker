// @flow

import React from 'react';

import styles from './index.module.scss';

type Props = {
  isLive: Boolean,
};

const Cell = (props: Props) => {
  const { isLive } = props;

  return <td className={`${styles.cell} ${isLive ? styles.active : ''}`} />;
};

export default Cell;
