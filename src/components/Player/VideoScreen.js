import React, {
  TouchableOpacity,
  View,
  PropTypes
} from 'react-native'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Player extends React.Component {
  render (props = this.props) {
    return (
      <View style={{flex: 2.4}}>
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
            source={{uri: props.videoUri}}
            style={{flex: 1}}
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
}

Player.propTypes = {
  flex: PropTypes.number,
  muted: PropTypes.bool,
  onClosePressed: PropTypes.func,
  onVideoLoaded: PropTypes.func,
  onVideoProgress: PropTypes.func,
  onVideoTouch: PropTypes.func,
  paused: PropTypes.bool,
  videoUri: PropTypes.string
}

const styles = {
  closeButton: {
    position: 'absolute',
    left: 10,
    top: 15
  }
}

export default Player
