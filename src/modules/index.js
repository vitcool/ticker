import { combineReducers } from 'redux';
import type { Action, Reducer } from 'redux';

import matrixReducer from './matrix';
import type { State as matrixState } from './matrix/reducer';

export type State = {
  matrix: matrixState,
};

const rootReducer: Reducer<State, Action<>> = combineReducers({
  matrix: matrixReducer,
});

export default rootReducer;
