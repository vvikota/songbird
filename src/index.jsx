import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux";
import {Provider} from "react-redux";

// import App from './App.tsx';
import Score from './components/score/score';
import reducer from "./reducer/index.js";
import {ActionCreator as MainActionCreator} from "./reducer/main/main";

const init = () => {

  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.dispatch(MainActionCreator.loadQuestions());

  ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <Score />
    </Provider>,
    document.getElementById('root')
  );
};

init();
