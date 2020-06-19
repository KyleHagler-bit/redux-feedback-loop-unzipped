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
    // payload need to be an object containing all of the customer info
    newState = { ...newState, ...action.payload };
  } 
  return newState;
};

const storeInstance = createStore(
  combineReducers({
    feeling: feelingReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
