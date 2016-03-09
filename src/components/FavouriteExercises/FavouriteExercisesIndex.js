import React, { Image, View, StyleSheet, PropTypes } from 'react-native'

import {VIEWPORT} from '../../constants/appConstants'
import FavouriteNavigationBar from './FavouriteNavigationBar'
import ExerciseList from './ExerciseList'

const FavouriteExercisesIndex = (props) => {
  return (
    <View
      style={styles.container}
    >
      <FavouriteNavigationBar
        editOnProgress={props.favouriteUiStates.editFavouriteExercises}
        onBackButton={props.onBackButton}
        onBrowseTabSelect={props.onBrowseTabSelect}
        onDoneButton={props.onDoneButton}
        onEditButton={props.onEditButton}
        onFavouriteTabSelect={() => undefined}
      />
      <ExerciseList
        data={props.favourites}
        editOnProgress={props.favouriteUiStates.editFavouriteExercises}
        onRemoveButton={props.onRemoveButton}
        onMoreButton={props.onMoreButton}
      />
    </View>
  )
}

FavouriteExercisesIndex.propTypes = {}
const styles = StyleSheet.create({
  container: {
    width: VIEWPORT.width
  }
})

export default FavouriteExercisesIndex
