import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import styles from '../styles/styles.ios';
export default class Signup extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit() {

  }
  onLogin() {}

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
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          style={{ height: 40, marginLeft: '10%' }}
          placeholder="Password"
          onChangeText={text => this.setState({ text })}
        />
        <View style={{ margin: 7 }} />
        <Button
          onPress={this.props.onSubmit}
          title="Submit"
        />
        <Button
          onPress={this.props.onLogin}
          title="Log In"
        />
      </ScrollView>

    );
  }
}
