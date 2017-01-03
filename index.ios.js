import React, { Component } from 'react';
import App from './app/iosApp';
import {
  AppRegistry
} from 'react-native';

class LTK extends Component {

  render() {
    return (
        <App />
    );
  }
}


AppRegistry.registerComponent('LTK', () => LTK);
