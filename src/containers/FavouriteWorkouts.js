import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import FavouriteWorkoutIndex from '../components/FavouriteWorkouts/FavouriteWorkoutIndex'
import * as UiActionCreators from '../redux_x/actions/uiStatesActionCreators'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'

const FavouriteWorkouts = (props) => {
  const favWorkouts = favouriteWorkoutsManager(props.favWorkouts, props.workouts, props.instructors)

  let onWorkoutSelect = (workoutId) => {
    props.playerDispatchers.loadWorkout(workoutId)
    props.navigator.push({name: 'workoutIntro'})
  }

  const onBrowseTabSelect = () => {
    props.uiDispatchers.switchBrowseTab('browse')
    props.navigator.replace({name: 'browse'})
  }
  const onFavouriteTabSelect = () => undefined
  const onSearch = () => props.navigator.push({name: 'search'})

  const goToProfile = (userId) => props.navigator.push({name: 'profile', userId: userId})

  return (
    <FavouriteWorkoutIndex
      favouriteWorkouts={favWorkouts}
      goToProfile={goToProfile}
      loadWorkout={onWorkoutSelect}

      onBrowseTabSelect={onBrowseTabSelect}
      onFavouriteTabSelect={onFavouriteTabSelect}
      onSearch={onSearch}
    />
  )
}

function favouriteWorkoutsManager (workoutIds, workouts, instructors) {
  return workoutIds.map(
    (workoutId) => {
      const instructor = workouts[workoutId].instructor
      return {
        ...workouts[workoutId],
        instructor: instructors[instructor]
      }
    }
  )
}

FavouriteWorkouts.propTypes = {}

export default connect(
  (state) => {
    return {
      instructors: state.instructor,
      workouts: state.workout,
      favWorkouts: state.userData.favouriteWorkouts
    }
  },
  (dispatch) => {
    return {
      uiDispatchers: bindActionCreators(UiActionCreators, dispatch),
      playerDispatchers: bindActionCreators(VideoActionCreators, dispatch)
    }
  }
)(FavouriteWorkouts)
