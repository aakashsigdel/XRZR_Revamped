import React, {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  PropTypes
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const StartButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.startButton}
                        onPress={props.onStartWorkout}
      >
        <Icon name='play' style={[styles.buttonText, styles.playIcon]} size={20} />
        <Text style={[styles.buttonText, styles.workoutTitle]}>START WORKOUT</Text>
      </TouchableOpacity>
    </View>
  )
}

StartButton.propTypes = {}
const styles = StyleSheet.create({
  container: {},
  startButton: {
    backgroundColor: 'rgb(213, 10, 177)',
    height: 55,

    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  },
  playIcon: {
    paddingLeft: 15
  },
  workoutTitle: {
    paddingLeft: 100,
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 17
  }
})

export default StartButton
