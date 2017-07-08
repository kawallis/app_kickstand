import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import Home from './components/home';
import LoginContainer from './containers/LoginContainer';

function requireAuth(nextState, replace) {
  if (!this.props.isLoggedIn) {
    replace({
      pathname: '/login'
    })
  }
}

export default class app extends Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginContainer} />
        </Switch>
      </NativeRouter>
    );
  };
};

AppRegistry.registerComponent('app', () => app);