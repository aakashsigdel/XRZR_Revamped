'use strict'

import React, {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

const CreateWorkoutButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.handleCreateWorkout}
      style={styles.container}
    >
      <Text style={styles.text}>
        {'CREATE WORKOUT'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 55,
    backgroundColor: '#C800A1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 17,
    color: 'white'
  }
})

export default CreateWorkoutButton
