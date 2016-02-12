import React, { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BrowseScreen from '../components/browse/BrowseScreen'
import * as VideoActionCreators from '../redux_x/actions/videoActionCreators'


const Browse = (props) => {

  let featured = featuredWorkoutsManager(props.featuredWorkouts, props.workouts, props.instructor)
  let trendings = trendingsManager(props.trendings, props.workouts)
  let listingItems = listingsManager(props.navigator)
  let categories = categoriesManager(props.categories)

  let onWorkoutSelect = (workoutId) => {
    props.playerDispatchers.loadWorkout(workoutId)
    props.navigator.push({name: 'player'})
  }

  return (
    <BrowseScreen
      featured={featured}
      trendings={trendings}
      listingItems={listingItems}
      categories={categories}
      onWorkoutSelect={onWorkoutSelect}
      { ...props.playerDispatchers }
    />
  )
}

function featuredWorkoutsManager(featuredWorkouts, workouts, instructors){
  return featuredWorkouts.map(
    (featuredId) => {
      let instructorId = workouts[featuredId].instructor
      return {
        ...workouts[featuredId],
        instructor: instructors[instructorId]
      }
    }
  )
}
function trendingsManager(trendIds, workouts){
  return trendIds.map(
    (trendId) => workouts[trendId]
  )
}
function listingsManager(navigator){
  let items = [{
      icon: 'whatshot',
      title: 'Most Popular Workouts',
      onPress: ()=>navigator.push({name: 'mostPopular'}),
    },{
      icon: 'star',
      title: 'XRZR selected',
      onPress: ()=>undefined,
  }
  ]
  return items
}
function categoriesManager(categories){
  return Object.keys(categories).map(
    (key) => categories[key]
  )
}

export default connect(
  (state) => {
    return {
      instructor: state.instructor,
      workouts: state.workout,
      trendings: state.trending,
      categories: state.category,
      featuredWorkouts: state.featuredWorkout,
    }
  },
  (dispatch) => {
    return {
      playerDispatchers: bindActionCreators(VideoActionCreators, dispatch)
    }
  }
)(Browse)