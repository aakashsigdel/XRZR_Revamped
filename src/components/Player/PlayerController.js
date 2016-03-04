import React, {
  View,
  StyleSheet,
  Text,
  PropTypes
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const PlayerController = (props) => {
  let playerPosition = props.progress * 100
  let remainingVideo = (1 - props.progress) * 100
  let remainingTime = remainingVideo / 100 * props.duration

  if (!props.showTime) {
    playerPosition = 0
    remainingVideo = 100
    remainingTime = 0
  }

  if (remainingTime <= 0 && props.showTime) {
    props.onNextPressed()
  }

  let remainingMinutes = Math.floor(remainingTime / 60)
  let remainingSeconds = remainingTime - (remainingMinutes * 60)
  remainingSeconds = Math.floor(remainingSeconds)

  remainingTime = ('00' + remainingMinutes).slice(-2)
  remainingTime += ':' + ('00' + remainingSeconds).slice(-2)

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

        <View style={styles.details}>
          <Text style={[styles.text, styles.counter]}>{remainingTime}</Text>
          <Text style={[styles.text, styles.title]}>{props.title}</Text>
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
        <View style={[styles.seenVideoLength, {flex: playerPosition}]} />
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
    justifyContent: 'space-between',
    marginTop: 5
  },
  controllerIcon: {
    color: 'white'
  },
  text: {
    color: 'white'
  },
  counter: {
    fontSize: 97
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
