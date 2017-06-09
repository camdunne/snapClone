import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './store';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

const ConnectedRouter = connect()(Router);
const store = configureStore();

const Scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={Home} title="Home" />
    <Scene key="login" component={Login} title="Log In" initial={true}/>
    <Scene key="signup" component={Signup} title="Sign Up" />
  </Scene>,
);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}
