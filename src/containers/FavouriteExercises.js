import React, { PropTypes } from 'react-native'
import {connect} from 'react-redux'

import FavouriteExercisesIndex from '../components/FavouriteExercises/FavouriteExercisesIndex'

const FavouriteExercises = (props) => {
  const favourites = favouriteExercisesManager(props.favouriteExercises, props.exercises)
  return (
    <FavouriteExercisesIndex favourites={favourites}/>
  )
}

function favouriteExercisesManager(favouriteIds, exercises){
  return favouriteIds.map((itemId) => {
    return exercises[itemId]
  })
}

FavouriteExercises.propTypes = {}

export default connect(
  (state) => {
    return {
      exercises: state.exercise,
      favouriteExercises: state.userData.favouriteExercises
    }
  }
)(FavouriteExercises)
