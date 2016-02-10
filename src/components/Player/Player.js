import React, {
  TouchableOpacity
} from 'react-native'
import Video from 'react-native-video'

const Player = (props) => {
  //var videoStyle = this.state.skin == 'embed' ? styles.nativeVideoControls : styles.fullScreen;
  var videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
  return (
    <TouchableOpacity style={{flex: props.flex}}
                      onPress={props.onVideoTouch}>
      <Video style={{flex:1}}
             source={{uri: props.videoUri}}
             resizeMode="contain"
             muted={props.muted}
             paused={props.paused}
             repeat={true}
             onLoad={props.onVideoLoaded}
             onProgress={props.onVideoProgress}
      />
    </TouchableOpacity>
  )
}

export default Player