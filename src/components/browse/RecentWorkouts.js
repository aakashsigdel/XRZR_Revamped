import React, { View, StyleSheet, PropTypes, Text } from 'react-native'

import WorkoutList from '../Common/WorkoutList'

const RecentWorkouts = (props) => {
  return (
    <View style={ styles.container }>
      <Text style={styles.title}>
        RECENT WORKOUTS
      </Text>
      <WorkoutList
        data={props.recentWorkouts}
        loadWorkout={props.loadWorkout}
      />
    </View>
  )
}

RecentWorkouts.propTypes = {}
const styles = StyleSheet.create({
  container: {},
  title: {
    marginTop: 24.5,
    marginLeft: 14,
    marginBottom: 9.5,

    fontFamily: 'SFCompactText-Semibold',
    fontSize: 11,
    color: 'white'
  }
})

export default RecentWorkouts
