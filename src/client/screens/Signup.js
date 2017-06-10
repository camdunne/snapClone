import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Firebase from 'firebase';
import { connect } from 'react-redux';
import { newUser } from '../actions/userAction';
import styles from '../styles/styles';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const params = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(params)
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
          value={this.state.username}
          onChangeText={text => this.setState({ username: text })}
        />
        <TextInput
          style={{ height: 40, marginLeft: '10%' }}
          placeholder="Email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={{ height: 40, marginLeft: '10%' }}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => this.setState({ password: text })}
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
  handleSubmit: React.PropTypes.func.isRequired,
  newUser: React.PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { newUser })(Signup);

