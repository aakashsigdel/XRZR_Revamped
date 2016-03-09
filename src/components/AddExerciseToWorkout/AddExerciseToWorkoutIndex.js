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
import Hr from '../Common/Hr'

const AddExerciseToWorkoutIndex = (props) => {
  return (
    <View
      style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={props.navigator.pop}
        >
          <Icon name='close'
            size={35}
            backgroundColor='transparent'
            color='rgba(255,255,255,0.6)'
          />
        </TouchableOpacity>
        <Text style={styles.topBarText}>ADD TO WORKOUT</Text>
      </View>
      <Hr />
      <View style={styles.listingContainer}>
        <Listing
          workouts={props.workouts}
          exercise={props.exercise}
          updateWorkout={props.updateWorkout}
          popRoute={props.popRoute}
        />
      </View>
      <TouchableOpacity
        onPress={props.handleNewWorkoutPress}
        style={styles.newWorkoutButton}
      >
        <Text style={styles.newWorkoutText}>
          {'NEW WORKOUT'}
        </Text>
      </TouchableOpacity>
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
    //borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    //borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 10
  },
  topBarText: {
    alignSelf: 'center',
    fontSize: 11,
    fontFamily: 'SFCompactText-Semibold',
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.5)'
  },
  listingContainer: {
    flex: 1
  },
  newWorkoutButton: {
    backgroundColor: 'rgb(213, 10 ,177)',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  newWorkoutText: {
    color: 'white'
  }
})

export default AddExerciseToWorkoutIndex
