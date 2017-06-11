import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import styles from '../styles/styles';

class SignupForm extends Component {
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
    console.log(this, this.props);
    this.props.newUser(params);
    // then if successful, go to login
    // if unsuccessful, give error message
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

SignupForm.propTypes = {
  newUser: React.PropTypes.func.isRequired,
};

export default SignupForm;
