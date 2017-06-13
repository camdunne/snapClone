import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import Camera from 'react-native-camera';

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
});
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }
  takePicture() {
    this.camera.capture()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          style={{ flex: 1 }}
          ref={cam => this.camera = cam}
          aspect={Camera.constants.Aspect.fill}
        />

      </View>
    );
  }
}
