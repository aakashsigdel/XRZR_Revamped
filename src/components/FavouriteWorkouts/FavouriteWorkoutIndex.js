import React, {
  Image,
  View,
  StyleSheet,
  PropTypes
} from 'react-native'

import FavouriteWorkoutNavBar from '../browse/BrowseNavigationBar' // <<
import FavouriteWorkoutListing from './FavouriteWorkoutListing'

import {VIEWPORT} from '../../constants/appConstants'

const FavouriteWorkoutIndex = (props) => {
  return (
    <Image
      source={require('../../../assets/images/background.png')}
      style={styles.container}
    >
      <FavouriteWorkoutNavBar
        goToProfile={props.goToProfile}
        onBrowseTabSelect={props.onBrowseTabSelect}
        onFavouriteTabSelect={props.onFavouriteTabSelect}
        onSearch={props.onSearch}
        selectedTab='favourite'
      />
      <FavouriteWorkoutListing
        favouriteWorkouts={props.favouriteWorkouts}
        loadWorkout={props.loadWorkout}
      />
    </Image>
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
    width: VIEWPORT.width
  }
})

export default FavouriteWorkoutIndex