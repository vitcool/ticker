import { createAction } from 'redux-actions';

type Action = { type: 'Tick'};

export const tick:Action = createAction('TICK');
