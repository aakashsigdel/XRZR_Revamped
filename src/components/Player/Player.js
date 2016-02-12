import React, {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
    <View style={{flex: props.flex}}>
      <TouchableOpacity style={{flex: 1}}
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
      <TouchableOpacity
        style={styles.closeButton}
        onPress={props.onClosePressed}
      >
        <Icon name="close"
              size={30}
              backgroundColor="transparent"
              color="rgba(255,255,255,0.6)"
        />
      </TouchableOpacity>
    </View>

  )
}

const styles ={
  closeButton: {
    position: 'absolute',
    left: 20,
    top: 20
  }
}

export default Player