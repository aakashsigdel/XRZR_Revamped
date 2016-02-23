import React, { PropTypes } from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as UiActionCreators from '../redux_x/actions/uiStatesActionCreators'
import * as UserDataActionCreators from '../redux_x/actions/userDataActionCreators'
import FavouriteExercisesIndex from '../components/FavouriteExercises/FavouriteExercisesIndex'

const FavouriteExercises = (props) => {
  const favourites = favouriteExercisesManager(props.favouriteExercises, props.exercises)
  const onBrowseTabSelect = () => props.navigator.push({name: 'browse'})
  const onBackButton = props.navigator.pop
  const onDoneButton = props.uiDispatchers.doneEditFavouriteExercisesFlag
  const onEditButton = props.uiDispatchers.editFavouriteExercisesFlag
  const onRemoveButton = props.userDataDispatchers.removeFavouriteExercises

  return (
    <FavouriteExercisesIndex
      favourites={favourites}
      favouriteUiStates={props.favouriteUiStates}
      onBackButton={onBackButton}
      onBrowseTabSelect={onBrowseTabSelect}
      onDoneButton={onDoneButton}
      onEditButton={onEditButton}
      onRemoveButton={onRemoveButton}
    />
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
      favouriteExercises: state.userData.favouriteExercises,
      favouriteUiStates: state.uiStates
    }
  },
  (dispatch) => {
    return {
      uiDispatchers: bindActionCreators(UiActionCreators, dispatch),
      userDataDispatchers: bindActionCreators(UserDataActionCreators, dispatch)
    }
  }
)(FavouriteExercises)
