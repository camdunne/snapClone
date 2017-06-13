import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    backgroundColor: 'transparent',
  },
});

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
      <ScrollView style={styles.background}>
        <Text
          style={{ marginTop: '10%', fontSize: 27 }}
        >
          Log in
        </Text>
        <View style={styles.container} />
        <View >
          <TextInput
            style={{ height: 40, marginLeft: '10%' }}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
          />
        </View>
        <View >
          <TextInput
            style={{ height: 40, marginLeft: '10%' }}
            placeholder="Password"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </View>
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
