import {createStore, applyMiddleware, combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

import {characterReducer} from './reducers/char';
import {edgeReducer} from './reducers/edges';

const store = createStore(
  combineReducers({
    character: characterReducer,
    edges: edgeReducer,
  }),
  applyMiddleware(thunk)
);

export default store;