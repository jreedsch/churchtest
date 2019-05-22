import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
