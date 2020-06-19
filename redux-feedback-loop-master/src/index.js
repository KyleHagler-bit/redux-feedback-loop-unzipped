import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const feelingReducer = (state = { feeling: 0}, action) => {
  let newState = { ...state };
  if (action.type === "UPDATE_FEELING") {
    newState = { ...newState, ...action.payload };
  } 
  return newState;
};

const understandingReducer = (state = { understanding: 0}, action) => {
  let newState = { ...state };
  if (action.type === "UPDATE_UNDERSTANDING") {
    newState = { ...newState, ...action.payload };
  } 
  return newState;
};

const storeInstance = createStore(
  combineReducers({
    feeling: feelingReducer,
    understanding: understandingReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
