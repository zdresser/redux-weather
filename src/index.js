import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import promise from "redux-promise"

import WeatherView from './components/WeatherView';
import weatherReducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(weatherReducer)}>
    <WeatherView />
  </Provider>,
  
  document.getElementById('root')
);


