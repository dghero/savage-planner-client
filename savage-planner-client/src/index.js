import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//create store
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {characterReducer} from './reducers/char';
import thunk from 'redux-thunk';
const store = createStore(characterReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
