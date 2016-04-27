import React, {
  Image,
  View,
  StyleSheet,
  PropTypes
} from 'react-native'

import FavouriteWorkoutNavBar from './FavouriteWorkoutNavBar' // <<
import FavouriteWorkoutListing from './FavouriteWorkoutListing'

import {VIEWPORT} from '../../constants/appConstants'

const FavouriteWorkoutIndex = (props) => {
  return (
    <View
      style={styles.container}
    >
      <FavouriteWorkoutNavBar
        goToProfile={props.goToProfile}
        onBackButton={props.onBackButton}
        onBrowseTabSelect={props.onBrowseTabSelect}
        onFavouriteTabSelect={props.onFavouriteTabSelect}
        onSearch={props.onSearch}
        selectedTab='favourite'
      />
      <FavouriteWorkoutListing
        favouriteWorkouts={props.favouriteWorkouts}
        loadWorkout={props.loadWorkout}
        titleText={props.titleText}
      />
    </View>
  )
}

FavouriteWorkoutIndex.propTypes = {
  favouriteWorkouts: PropTypes.array,
  goToProfile: PropTypes.func,
  loadWorkout: PropTypes.func,

  onBrowseTabSelect: PropTypes.func,
  onFavouriteTabSelect: PropTypes.func,
  onSearch: PropTypes.func
}
const styles = StyleSheet.create({
  container: {
    width: VIEWPORT.width,
    flex: 1
  }
})

export default FavouriteWorkoutIndex
