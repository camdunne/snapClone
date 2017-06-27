import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';


const Scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="home"
      component={Home}
      hideNavBar
      title="Home"
    />
    <Scene key="login" hideNavBar component={Login} title="Log In" initial />
    <Scene key="signup" hideNavBar component={Signup} title="Sign Up" />
  </Scene>,
);


export default class App extends Component {
  render() {
    return (
      <Router scenes={Scenes} />
    );
  }
}
