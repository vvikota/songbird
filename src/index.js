import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from './App';
import {reducer, ActionCreator} from "./reducer.js";

const init = () => {

  
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch(ActionCreator.loadQuestions());
  store.dispatch(ActionCreator.loadCorrectAnswer());

  ReactDOM.render(<Provider store={store}>

        <App />

    </Provider>,
    document.getElementById('root')
  );
};

init();

