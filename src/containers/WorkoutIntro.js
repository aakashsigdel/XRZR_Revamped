import React, { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import WorkoutIntroIndex from '../components/WorkoutIntro/WorkoutIntroIndex'
import * as PlayerActionCreators from '../redux_x/actions/videoActionCreators'

const WorkoutIntro = (props) => {
  let workout = _getWorkoutInfo(props.player.workoutId, props.workouts)
  let exercises = _getExercises(props.player.workoutId, props.workouts, props.exercises)
  let instructor = _getInstructor(props.player.workoutId, props.workouts, props.instructors)

  let onStartWorkout = ()=>{
    props.playerActions.loadWorkout(props.player.workoutId)
    props.navigator.push({name: 'player'})
  }
  let onExerciseSelect = (videoId) => {
    props.playerActions.loadWorkout(props.player.workoutId)
    props.playerActions.changeVideo(videoId)
    props.navigator.push({name: 'player'})
  }
  let onBackButton = () => props.navigator.pop()

  return (
    <WorkoutIntroIndex workout={workout}
                       exercises={exercises}
                       instructor={instructor}
                       onStartWorkout={onStartWorkout}
                       onExerciseSelect={onExerciseSelect}
                       onBackButton={onBackButton}
    />
  )
}

function _getWorkoutInfo(workoutId, workouts){
  let workout = workouts[workoutId]
  return workout || {}
}
function _getExercises(workoutId, workouts, exercises){
  let workout = _getWorkoutInfo(workoutId, workouts)
  let exercisesList = workout.exercises || []
  return exercisesList.map((exerciseId, index)=>{
    return {...exercises[exerciseId], index:index}
  })
}
function _getInstructor(workoutId, workouts, instructors){
  let workout = _getWorkoutInfo(workoutId, workouts)
  let instructorId = workout.instructor
  return instructors[instructorId] || {}
}
const styles = StyleSheet.create({
  container: {}
})

export default connect(
  (state) => {
    return {
      workouts: state.workout,
      exercises: state.exercise,
      instructors: state.instructor,
      player: state.player,
    }
  },
  (dispatch)=>{
    return {
      playerActions: bindActionCreators(PlayerActionCreators, dispatch)
    }
  }
)(WorkoutIntro)