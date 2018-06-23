import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';
import { merge } from 'lodash';
import { fetchAllServers } from './actions/server_actions';
// import * as localStorage from './localstorage/local_storage';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  let preloadedState = {};

  if (window.currentUser) {
    preloadedState = merge(preloadedState,
      { session: { user: window.currentUser } });
    delete window.currentUser;
  }


  store = preloadedState ? configureStore(preloadedState) : configureStore();
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});
