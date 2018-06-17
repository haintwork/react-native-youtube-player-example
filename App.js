import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import YouTube from 'react-native-youtube';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <YouTube
          videoId="pbqL7cG5y9Q"   // The YouTube video ID
          play={false}             // control playback of video with true/false
          fullscreen={true}       // control whether the video should play in fullscreen or inline
          loop={false}             // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: 'stretch', height: 300 }}
        />
        <Text>
          {this.state.isReady ? 'Player is ready' : 'Player setting up...'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
