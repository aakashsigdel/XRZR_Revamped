'use strict'

import React, {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

const WorkoutName = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {'WORKOUT NAME'}
      </Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    backgroundColor: 'black',
    marginTop: 5
  },
  titleText: {
    paddingTop: 17,
    paddingLeft: 12.5,
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 12,
    color: 'white'
  },
  textInputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    fontFamily: 'Avenir-Medium',
    fontSize: 19,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    paddingLeft: 20,
    paddingRight: 20,
  }
})

export default WorkoutName
