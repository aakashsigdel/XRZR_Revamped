'use strict'

import React, {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HEADERBAR_HEIGHT } from '../../constants/appConstants'
import Listing from './Listing'

const AddExerciseToWorkoutIndex = (props) => {
  return (
    <View
      style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={props.navigator.pop}
        >
          <Icon name='close'
            size={40}
            backgroundColor='transparent'
            color='rgba(255,255,255,0.6)'
          />
        </TouchableOpacity>
        <Text style={styles.topBarText}>ADD TO WORKOUT</Text>
      </View>
      <View style={styles.listingContainer}>
        <Listing
          workouts={props.workouts}
          exercise={props.exercise}
          updateWorkout={props.updateWorkout}
          popRoute={props.popRoute}
        />
      </View>
      <TouchableOpacity style={styles.newWorkoutBtn} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: HEADERBAR_HEIGHT,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1
  },
  topBarText: {
    alignSelf: 'center',
    fontSize: 11,
    fontFamily: 'SFCompactText-Semibold',
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.5)',
    marginLeft: 5
  },
  listingContainer: {
    flex: 1
  }
})

export default AddExerciseToWorkoutIndex
