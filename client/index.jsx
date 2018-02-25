import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/configureStore';

const initialState = {
  categories: {
    byID: {

    }
  },
  session: {
    currentUser: window.currentUser
  }
};

const store = configureStore(initialState);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render( <Root store={store} />, document.getElementById('root'));
});
