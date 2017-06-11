import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm';
import { newUser } from '../actions/userAction';
import styles from '../styles/styles';
class Signup extends Component {


  render() {
    return (
      <SignupForm newUser={this.props.newUser} />

    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, { newUser })(Signup);
