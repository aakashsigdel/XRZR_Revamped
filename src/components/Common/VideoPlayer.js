import React, {
  View,
  StyleSheet,
  PropTypes,
  TouchableOpacity
} from 'react-native'
import Video from 'react-native-video'

class VideoPlayer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {paused: true}
  }
  _togglePause () {
    this.setState({
      paused: !this.state.paused
    })
  }

  render () {
    console.log(this.props.videoUri)
    return (
      <TouchableOpacity
        onPress={this._togglePause.bind(this)}
        style={{height: this.props.height}}
      >
        <Video
          muted={this.props.muted}
          // onLoad={this.props.onVideoLoaded}
          // onProgress={this.props.onVideoProgress}
          paused={this.state.paused}
          repeat
          resizeMode='contain'
          source={{uri: this.props.videoUri}}
          style={{flex: 1, height: 211}}
        />
      </TouchableOpacity>
    )
  }
}

VideoPlayer.propTypes = {}
const styles = StyleSheet.create({
  container: {}
})

export default VideoPlayer
