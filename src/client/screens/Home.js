/**
 * Created by cameron on 6/9/17.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
// import { connect } from 'react-redux';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ marginTop: '30%'}}>
        <Text>Hello</Text>
      </View>
    );
  }
}

// const mapStateToProps = ()=>{};
// export default connect(null, null)(Home);
