import React, {
  View,
  StyleSheet,
  Text,
  PropTypes
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const PlayerController = (props) => {
  let playerPosition = props.totalProgress * 100
  let remainingVideo = (1 - props.totalProgress) * 100
  let remainingTime = (1 - props.progress) * props.duration

  let remainingMinutes = Math.floor(remainingTime / 60)
  let remainingSeconds = remainingTime - (remainingMinutes * 60)
  remainingSeconds = Math.floor(remainingSeconds)

  remainingTime = ('00' + remainingMinutes).slice(-2)
  remainingTime += ':' + ('00' + remainingSeconds).slice(-2)

  if (!props.showTime) {
    playerPosition = 0
    remainingVideo = 100
    remainingTime = props.duration
  }

  if (remainingTime <= 0 && props.showTime) {
    props.onNextPressed()
  }

  let textStyles = [styles.text, styles.counter]
  let seekerStyles = {}
  let detailStyles = {}
  if (props.landscape) {
    textStyles = [styles.text, styles.counter, styles.landscapeText]
    seekerStyles['backgroundColor'] = 'rgb(65, 134, 117)'
    detailStyles = styles.detailsLandscape
  }

  return (
    <View style={[{flex: props.flex}, styles.container, {backgroundColor: props.backgroundColor}]}>
      <View style={styles.controllers}>
        <Icon.Button
          backgroundColor='transparent'
          color='white'
          name='backward'
          onPress={props.onPreviousPressed}
          size={25}
        />

        <View style={[ styles.details, detailStyles ]}>
          <Text style={textStyles}>{remainingTime}</Text>
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
        <View style={[styles.seenVideoLength, {flex: playerPosition}, seekerStyles]} />
        <View style={[styles.remainingVideoLength, {flex: remainingVideo}]} />
      </View>
    </View>
  )
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

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#3c404e'
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
    fontSize: 97
  },
  landscapeText: {
    fontSize: 55
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
    alignItems: 'center',
  },
  detailsLandscape: {
    paddingLeft: 40,
    paddingRight: 35,
    paddingBottom: 5
  },
  title: {
    marginTop: -5
  }
})

export default PlayerController
