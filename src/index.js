import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import LoginReducer from './LoginReducer';
import RestaurantReducer from './RestaurantReducer';
import RestaurantReducerBis from './RestaurantReducerBis';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducerStore = combineReducers({
  login: LoginReducer,
  resto: RestaurantReducer,
  RestoBis: RestaurantReducerBis,
});

let storeState = createStore(
  reducerStore,
  composeEnhancers(applyMiddleware(thunk))
);

let app = (
  <BrowserRouter basename='/'>
    <Provider store={storeState}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
