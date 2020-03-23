import { handleActions } from 'redux-actions';

import { generateInitialMatrix, generateNewMatrix } from 'helpers/matrix';

import { TABLE_SIZE } from 'config';

import { tick } from './actions';

export type State = {
  data: Array<Array<number>>,
};

const defaultState: State = {
  data: generateInitialMatrix(TABLE_SIZE),
};

export default handleActions(
  {
    [tick]: (state: State) => {
      return {
        data: generateNewMatrix(state.data),
      };
    },
  },
  defaultState,
);
