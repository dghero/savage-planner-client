import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//create store
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import {someReducer} from './reducers/some';
// import thunk from 'redux-thunk'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
