import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { createUser } from '../api/user';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const params = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    createUser(params);
  }
  render() {
    return (
      <ScrollView style={{ marginTop: '30%' }}>
        <Text
          style={{ fontSize: 27 }}
        >
          Sign up
        </Text>
        <TextInput
          style={{ height: 40, marginLeft: '10%' }}
          placeholder="Username"
          returnKeyType="next"
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          style={{ height: 40, marginLeft: '10%' }}
          placeholder="Email"
          returnKeyType="next"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={{ height: 40, marginLeft: '10%' }}
          placeholder="Password"
          returnKeyType="next"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
        />
        <View style={{ margin: 7 }} />
        <Button
          onPress={this.handleSubmit}
          title="Submit"
        />
        <Button
          onPress={() => Actions.login()}
          title="Got an account?"
        />
      </ScrollView>
    );
  }
}
Signup.propTypes = {

};


export default Signup;
