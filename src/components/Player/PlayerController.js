import React, {
  View,
  StyleSheet,
  Text,
  PropTypes
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { VIEWPORT } from '../../constants/appConstants'

class PlayerController extends React.Component {
  render (props = this.props) {
    //let playerPosition = props.totalProgress * 100
    //let remainingVideo = (1 - props.totalProgress) * 100
    //let remainingTime = (1 - props.progress) * props.duration
    //
    //let remainingMinutes = Math.floor(remainingTime / 60)
    //let remainingSeconds = remainingTime - (remainingMinutes * 60)
    //remainingSeconds = Math.floor(remainingSeconds)
    //
    //remainingTime = ('00' + remainingMinutes).slice(-2)
    //remainingTime += ':' + ('00' + remainingSeconds).slice(-2)
    //
    //if (!props.showTime) {
    //  playerPosition = 0
    //  remainingVideo = 100
    //  remainingTime = props.duration
    //}
    //
    //if (remainingTime <= 0 && props.showTime) {
    //  props.onNextPressed()
    //}

    const seekbarCompletion = props.seekbarCompletion
    const remainingVideo = 100 - seekbarCompletion

    const modeStyles = (props.landscape) ? landscapeStyles : portraitStyles

    return (
      <View style={[styles.container, modeStyles.container]}>
        <View style={styles.controllers}>
          <Icon.Button
            backgroundColor='transparent'
            color='white'
            name='backward'
            onPress={props.onPreviousPressed}
            size={25}
          />

          <View style={[ styles.details, modeStyles.details ]}>
            <Text style={[styles.text, styles.counter, modeStyles.counter]}>{props.remainingTime}</Text>
            <Text style={[styles.text, styles.title]}>{props.title.toUpperCase()}</Text>
          </View>

          <Icon.Button
            backgroundColor='transparent'
            color='white'
            name='forward'
            onPress={props.onNextPressed}
            size={25}
            style={{marginRight: -10}}
          />

        </View>
        <View style={styles.seeker}>
          <View style={[styles.seenVideoLength, {flex: seekbarCompletion}, modeStyles.seenVideoLength]}/>
          <View style={[styles.remainingVideoLength, {flex: remainingVideo}]}/>
        </View>
      </View>
    )
  }
}

PlayerController.propTypes = {
  backgroundColor: PropTypes.string,
  duration: PropTypes.number,
  flex: PropTypes.number,
  onNextPressed: PropTypes.func,
  onPreviousPressed: PropTypes.func,
  progress: PropTypes.number,
  showTime: PropTypes.bool,
  title: PropTypes.string
}

PlayerController.defaultProps = {
  backgroundColor: '#3c404e'
}

const portraitStyles = {
  container: {
    backgroundColor: 'rgba(255,255,255,0.1)'
  },
  details: {
    width: VIEWPORT.width - 100
  },
  counter: {},
  seenVideoLength: {}
}
const landscapeStyles = {
  container: {
    backgroundColor: 'transparent'
  },
  details: {
    paddingLeft: 40,
    paddingRight: 35,
    paddingBottom: 5
  },
  counter: {
    fontSize: 55
  },
  seenVideoLength: {
    backgroundColor: 'rgb(65, 134, 117)'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.8
  },
  controllers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  landscapeControllers: {
    justifyContent: 'center'
  },
  controllerIcon: {
    color: 'white'
  },
  text: {
    color: 'white',
    fontFamily: 'SFUIText-Regular',
    fontSize: 13
  },
  counter: {
    fontFamily: 'SFCompactText-Regular',
    fontSize: 0.145 * VIEWPORT.height 
  },
  seeker: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1

  },
  seenVideoLength: {
    height: 5,
    flex: 0,
    backgroundColor: 'white'
  },
  remainingVideoLength: {
    height: 5,
    flex: 100,
    backgroundColor: 'black'
  },
  details: {
    alignItems: 'center'
  },
  title: {
    marginTop: -5
  }
})

export default PlayerController
