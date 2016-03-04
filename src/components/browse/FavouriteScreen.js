import React, { Image, ScrollView, StyleSheet, PropTypes } from 'react-native'

import BrowserNavigationBar from './BrowseNavigationBar'
import {ListingMenu} from './ListingMenu'
import RecentWorkouts from './RecentWorkouts'

const FavouriteScreen = (props) => {
  return (
    <Image
      source={require('../../../assets/images/background.png')}
      style={{flex: 1}}
    >
      <BrowserNavigationBar
        goToProfile={props.goToProfile}
        onBrowseTabSelect={props.onBrowseTabSelect}
        onFavouriteTabSelect={props.onFavouriteTabSelect}
        onSearch={props.onSearch}
        selectedTab='favourite'
      />
      <ScrollView>
        <ListingMenu items={props.favouriteListingItems} />

        <RecentWorkouts
          loadWorkout={props.onWorkoutSelect}
          recentWorkouts={props.recentWorkouts}
        />
      </ScrollView>
    </Image>
  )
}

FavouriteScreen.propTypes = {
  favouriteListingItems: PropTypes.array,
  loadWorkout: PropTypes.func,
  onBrowseTabSelect: PropTypes.func,
  onFavouriteTabSelect: PropTypes.func,
  onSearch: PropTypes.func
}

export default FavouriteScreen
