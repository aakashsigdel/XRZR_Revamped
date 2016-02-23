import React, { Image, View, StyleSheet, PropTypes } from 'react-native'
import FavouriteNavigationBar from './FavouriteNavigationBar'
import ExerciseList from './ExerciseList'

const FavouriteExercisesIndex = (props) => {
  return (
    <Image
      source={require('../../../assets/images/background.png')}
      style={styles.container}
    >
      <FavouriteNavigationBar
        onBrowseTabSelect={() => undefined}
        onFavouriteTabSelect={() => undefined}
      />
      <ExerciseList data={props.favourites} />
    </Image>
  )
}

FavouriteExercisesIndex.propTypes = {}
const styles = StyleSheet.create({
  container: {}
})

export default FavouriteExercisesIndex
