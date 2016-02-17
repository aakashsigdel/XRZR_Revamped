import React, { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as UiStateActionCreators from '../redux_x/actions/uiStatesActionCreators'
import SearchIndex from '../components/Search/SearchIndex'

const Search = (props) => {
  let onCategorySelect = (categoryId) => {
    props.uiDispatchers.switchCategory(categoryId)
    props.navigator.push({name: 'category'})
  }

  return (
    <SearchIndex workouts={denormalizeInstructor(props.workouts, props.instructors)}
                 categories={denormalizeCategories(props.categories)}
                 onCategorySelect={onCategorySelect}
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
      workouts: state.workout,
      categories: state.category,
      instructors: state.instructor
    }
  },
  (dispatch) => {
    return {
      uiDispatchers: bindActionCreators(UiStateActionCreators, dispatch)
    }
  }
)(Search)