import { createStore } from 'redux';
import fishReducer from './reducer';

export const store = createStore(
  fishReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
