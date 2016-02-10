import React, {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const PlayerController = (props) => {
  let playerPosition = props.progress * 100
  let remainingVideo = (1-props.progress) * 100
  let remainingTime = remainingVideo / 100 * props.duration

  if (! props.showTime){
    playerPosition = 0
    remainingVideo = 100
    remainingTime = 0
  }

  if (remainingTime <= 0 && props.showTime){
    console.log("next please")
    props.onNextPressed()
  }

  let remainingMinutes = Math.floor( remainingTime / 60 )
  let remainingSeconds = remainingTime - (remainingMinutes * 60)
  remainingSeconds = Math.floor(remainingSeconds)

  remainingTime = ('00'+remainingMinutes).slice(-2)
  remainingTime += ":" + ('00'+remainingSeconds).slice(-2)

  return (
    <View style={[{flex: props.flex}, styles.container]}>
      <View style={styles.controllers}>
        <Icon.Button name='backward' size={25} color="white"
                     backgroundColor="transparent"
                     onPress={props.onPreviousPressed}
        />

        <View style={styles.details}>
          <Text style={[styles.text, styles.counter]}>{remainingTime}</Text>
          <Text style={[styles.text]}>{ props.title }</Text>
        </View>

        <Icon.Button name='forward' size={25} color="white"
                     backgroundColor="transparent"
                     onPress={props.onNextPressed}
        />

      </View>
      <View style={styles.seeker}>
        <View style={[styles.seenVideoLength, {flex: playerPosition}, ]} />
        <View style={[styles.remainingVideoLength, {flex: remainingVideo}, ]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c404e'
  },
  controllers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  controllerIcon: {
    color: 'white'
  },
  text: {
    color: 'white'
  },
  counter: {
    fontSize: 45
  },
  seeker: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,

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
  details:{
    alignItems: 'center'
  }
})

export default PlayerController