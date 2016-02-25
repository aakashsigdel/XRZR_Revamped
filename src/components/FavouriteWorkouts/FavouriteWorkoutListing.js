import React, {
  View,
  StyleSheet,
  Text,
  PropTypes
} from 'react-native'

import WorkoutList from '../Common/WorkoutList'

const FavouriteWorkoutListing = (props) => {
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>
        FAVOURITE WORKOUTS
      </Text>
      <WorkoutList
        data={props.favouriteWorkouts}
        loadWorkout={props.loadWorkout}
      />
    </View>
  )
}

FavouriteWorkoutListing.propTypes = {}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: 'white',
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 11,

    paddingTop: 5,
    paddingLeft: 14,
    paddingBottom: 6
  }
})

export default FavouriteWorkoutListing
