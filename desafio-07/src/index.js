import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Routes />;
  }
}

/* <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
