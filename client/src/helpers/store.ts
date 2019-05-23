import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { mainReducer, defaultState } from '../reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
  mainReducer,
  defaultState(),
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
