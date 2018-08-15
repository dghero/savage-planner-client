import {createStore, applyMiddleware, combineReducers} from 'redux';
// import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

//Local storage bits
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

//Reducers to combine
import {characterReducer} from './reducers/char';
import {edgeReducer} from './reducers/edges';
import {authReducer} from './reducers/auth';

const store = createStore(
  combineReducers({
    character: characterReducer,
    edges: edgeReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;