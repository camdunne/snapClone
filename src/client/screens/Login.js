import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

import styles from '../styles/styles';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      validated: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {

  }
  render() {
    return (
      <ScrollView style={{ marginTop: '30%' }}>
        <Text
          style={{ fontSize: 27 }}
        >
          Log in
        </Text>
        <TextInput
          style={{ height: 40, marginLeft: '10%' }}
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          style={{ height: 40, marginLeft: '10%' }}
          placeholder="Password"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
        />
        <View style={{ margin: 7 }} />
        <Button
          onPress={this.handleSubmit}

          title="Submit"
        />
        <Button
          onPress={() => Actions.signup()}
          title="Need an Account?"
        />
      </ScrollView>

    );
  }
}

export default Login;
