// @flow

import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import Table from 'components/Table';

import rootReducer from 'modules';

import styles from './index.module.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <header className={styles.appHeader}>Ticker</header>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
