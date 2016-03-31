import React, {
  View,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as UiStateActionCreators from '../redux_x/actions/uiStatesActionCreators'
import SearchIndex from '../components/Search/SearchIndex'
import { loadWorkout } from '../redux_x/actions/videoActionCreators'

const Search = (props) => {
  let onCategorySelect = (categoryId) => {
    props.uiDispatchers.switchCategory(categoryId)
    props.navigator.push({name: 'category'})
  }

  const loadWorkout = (workoutId) => {
    props.loadWorkout(workoutId)
    props.navigator.push({
      name: 'workoutIntro'
    })
  }

  let onClosePressed = () => {
    props.navigator.pop()
  }

  return (
    <SearchIndex
      categories={denormalizeCategories(props.categories)}
      loadWorkout={loadWorkout}
      onCategorySelect={onCategorySelect}
      onClosePressed={onClosePressed}
      workouts={denormalizeInstructor(props.workouts, props.instructors)}
    />
  )
}

function denormalizeInstructor(workouts, instructors){
  return Object.keys(workouts).map(
    (workoutId) => {
      let workout = workouts[workoutId]
      return {
        ...workout,
        instructor: instructors[workout.instructor]
      }
    }
  )
}
function denormalizeCategories(categories){
  return Object.keys(categories).map((categoryId)=>categories[categoryId])
}

export default connect(
  (state) => {
    return {
      workouts: state.workout.data,
      categories: state.category,
      instructors: state.instructor
    }
  },
  (dispatch) => {
    return {
      uiDispatchers: bindActionCreators(UiStateActionCreators, dispatch),
      loadWorkout: bindActionCreators(loadWorkout, dispatch)
    }
  }
)(Search)
