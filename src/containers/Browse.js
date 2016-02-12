import React, { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import BrowseScreen from '../components/browse/BrowseScreen'

const Browse = (props) => {

  let featured = featuredWorkoutsManager(props.featuredWorkouts, props.workouts)
  let trendings = trendingsManager(props.trendings, props.workouts)
  let categories = categoriesManager(props.categories)
  console.log(categories)

  return (
    <BrowseScreen
      featured={featured}
      trendings={trendings}
      categories={categories}

    />
  )
}

function trendingsManager(trendIds, workouts){
  return trendIds.map(
    (trendId) => workouts[trendId]
  )
}
function categoriesManager(categories){
  return Object.keys(categories).map(
    (key) => categories[key]
  )
}
function featuredWorkoutsManager(featuredWorkouts, workouts){
  return featuredWorkouts.map(
    (featuredId) => workouts[featuredId]
  )
}
export default connect(
  (state) => {
    return {
      workouts: state.workout,
      trendings: state.trending,
      categories: state.category,
      featuredWorkouts: state.featuredWorkout,
    }
  }
)(Browse)