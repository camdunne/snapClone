import { Actions } from 'react-native-router-flux';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import styles from '../styles/styles';
export default ({ onSubmit }) => (
  <ScrollView style={{ marginTop: '30%' }}>
    <Text
      style={{ fontSize: 27 }}
    >
          Sign up
        </Text>
    <TextInput
      style={{ height: 40, marginLeft: '10%' }}
      placeholder="Username"
      onChangeText={text => this.setState({ text })}
    />
    <TextInput
      style={{ height: 40, marginLeft: '10%' }}
      placeholder="Email"
      onChangeText={text => this.setState({ text })}
    />
    <TextInput
      style={{ height: 40, marginLeft: '10%' }}
      placeholder="Password"
      onChangeText={text => this.setState({ text })}
    />
    <View style={{ margin: 7 }} />
    <Button
      onPress={onSubmit}
      title="Submit"
    />
    <Button
      onPress={() => Actions.login()}
      title="Got an account?"
    />
  </ScrollView>

    );
