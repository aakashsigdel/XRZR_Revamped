import React, {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Player = (props) => {
  return (
    <View style={{flex: props.flex}}>
      <TouchableOpacity
        onPress={props.onVideoTouch}
        style={{flex: 1}}
      >

        <Video
          muted={props.muted}
          onLoad={props.onVideoLoaded}
          onProgress={props.onVideoProgress}
          paused={props.paused}
          repeat
          resizeMode='contain'
          style={{flex:1}}
          source={{uri: props.videoUri}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onClosePressed}
        style={styles.closeButton}
      >
        <Icon
          backgroundColor='transparent'
          color='rgba(255,255,255,0.6)'
          name='close'
          size={35}
        />
      </TouchableOpacity>
    </View>

  )
}

const styles ={
  closeButton: {
    position: 'absolute',
    left: 12.5,
    top: 29
  }
}

export default Player