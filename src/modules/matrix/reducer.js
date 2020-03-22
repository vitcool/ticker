// @flow

import { handleActions } from 'redux-actions';

import { generateInitialMatrix, generateNewMatrix } from 'helpers/matrix';

import { TABLE_SIZE } from 'config';

import { tick } from './actions';

type State = {
  data: Array<Array<String>>,
};

const defaultState: State = {
  data: generateInitialMatrix(TABLE_SIZE),
};

export default handleActions(
  {
    [tick]: state => {
      return {
        data: generateNewMatrix(state.data),
      };
    },
  },
  defaultState,
);
