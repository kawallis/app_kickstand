import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux'
import App from './App'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers/reducers';

const store = createStore(reducers, {
  isLoggedIn: false,
  token: '',
  user: {},
},
compose(
   applyMiddleware(thunk),
   global.reduxNativeDevTools ?
      global.reduxNativeDevTools(/*options*/) :
      noop => noop
));

export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  };
};

AppRegistry.registerComponent('index', () => index);
