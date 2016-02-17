import React, { Image, View, StyleSheet, Text } from 'react-native'
import WorkoutIntroNavigation from './WorkoutIntroNavigation'
import WorkoutDescription from './WorkoutDescription'
import ExerciseList from './ExerciseList'
import { VIEWPORT } from '../../constants/appConstants'

import Icon from 'react-native-vector-icons/FontAwesome'


const WorkoutIntroIndex = (props) => {
  return (
    <Image style={ styles.container }
           source={require('../../../assets/images/background.png')}
    >
      <WorkoutIntroNavigation onBackButton={props.onBackButton} />
      <View style={{flex:1}}>
        <WorkoutDescription workout={props.workout} instructor={props.instructor} />
      </View>
      <View style={{flex:1}}>
        <ExerciseList exercises={props.exercises}
                      onStartWorkout={props.onStartWorkout}
                      onExerciseSelect={props.onExerciseSelect}
        />
      </View>
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    width: VIEWPORT.width,
    height: VIEWPORT.height
  }
})

export default WorkoutIntroIndex