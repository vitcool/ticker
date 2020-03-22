import { combineReducers } from 'redux';
import matrixReducer from './matrix';

const rootReducer = combineReducers({
  matrix: matrixReducer,
});

export default rootReducer;
