import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

//will have minimums (defaults) of 1's here
const formReducer = (state =
  [{
    feeling: 1,
    understanding: 1,
    support: 1,
    comments: ''
  }], action) => {
  console.log("action in Reducer", action.payload)
  let newState = { ...state };
  if (action.type === "UPDATE") {
    newState = { ...newState, ...action.payload };
  } else if (action.type === "CLEAR") {
    newState = {
      feeling: 1,
      understanding: 1,
      support: 1,
      comments: ''
    }
  }
  console.log(newState);
  return newState;
};

const adminReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "GET_ADMIN") {
    newState = [...action.payload];
  } else if (action.type === "REMOVE_ENTRY") {
    const filteredEntries = newState.filter(
      (item) => item.id !== action.payload.id
    );
    newState = [filteredEntries]
  }

  return newState;
};


const storeInstance = createStore(
  combineReducers({
    form: formReducer,
    admin: adminReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
