import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';
import { merge } from 'lodash';
// import * as localStorage from './localstorage/local_storage';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = merge(preloadedState, { session: { currentUser: window.currentUser } });
    delete window.currentUser;
  }

  if (window.currentServer) {
    preloadedState = merge(preloadedState, { session: { currentServer: window.currentServer } });
    delete window.currentUser;
  }

  // if (localStorage.loadServer) {
  //   preloadedState = merge(preloadedState, { session: {currentServer: JSON.parse(localStorage.loadServer)}});
  // }

  store = preloadedState ? configureStore(preloadedState) : configureStore()
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});
