import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from "react-redux";

import App from './App.tsx';
import {reducer} from "./reducer/main/main";
import {ActionCreator as MainActionCreator} from "./reducer/main/main";

const init = () => {

  console.log(1);

  const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['gameScore']
  }

  const persistedReducer = persistReducer(persistConfig, reducer)

  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const persistor = persistStore(store)

  store.dispatch(MainActionCreator.loadQuestions());

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
};

init();
