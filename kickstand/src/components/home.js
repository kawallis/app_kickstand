import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class home extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to Kickstand!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  }
});

AppRegistry.registerComponent('home', () => home);