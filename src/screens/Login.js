import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import styles from '../styles/styles.ios';
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login page</Text>
      </View>
    );
  }
}
