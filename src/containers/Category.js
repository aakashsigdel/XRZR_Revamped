import React, { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import CategoryIndex from '../components/Category/CategoryIndex'

import * as CategoryActionCreators from '../redux_x/actions/categoryActionCreators'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'

class Category extends React.Component {

  componentWillMount () {
    this.props.CategoryDispatchers.fetchCategoriesDetails(this.props.uiStates.selectedCategory)
  }

  render (props = this.props) {

    let category = props.uiStates.selectedCategory
    let catItem = props.categories[ category ]
    let onBackButton = props.navigator.pop
    const onSearch = (_) => {
      props.navigator.push({ name: 'search' })
    }

    let denormalizedData = []

    if (! props.categoryIsFetching) {
      denormalizedData = denormalizeExerciseItems(
        category,
        props.categories,
        props.workouts,
        props.instructors
      )
    }

    let onWorkoutSelect = (workoutId) => {
      props.PlayerDispatchers.loadWorkout(workoutId)
      props.navigator.push({ name: 'workoutIntro' })
    }

    return (
      <CategoryIndex catItem={catItem}
                     catData={ denormalizedData }
                     isFetching={props.categoryIsFetching}
                     onWorkoutSelect={ onWorkoutSelect }
                     onBackButton={onBackButton}
                     onSearch={onSearch}
      />
    )
  }
}

function denormalizeExerciseItems (category, categories, workouts, instructors){
  let categoryItem = categories[category]
  if (!categoryItem || !categoryItem.workouts )
    return {}
  
  let workoutItems = categoryItem.workouts.map(
    (workoutId) => {
      let workout = workouts[workoutId]
      let instructorId = workout.instructor
      let instructor = instructors[instructorId]
      return {
        ...workout,
        instructor
      }
    }
  )
  return workoutItems
}

export default connect(
  (state) => {
    return {
      workouts: state.workout.data,
      exercises: state.exercise,
      categories: state.category.data,
      categoryIsFetching: state.category.isFetching,
      instructors: state.user.data,
      uiStates: state.uiStates
    }
  },
  (dispatch) => {
    return {
      CategoryDispatchers: bindActionCreators(CategoryActionCreators, dispatch),
      PlayerDispatchers: bindActionCreators(VideoActionCreators, dispatch)
    }
})(Category)
