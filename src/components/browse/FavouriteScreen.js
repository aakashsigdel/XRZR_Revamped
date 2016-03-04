import React, {
  ScrollView,
  PropTypes,
  View
} from 'react-native'

import BrowserNavigationBar from './BrowseNavigationBar'
import {ListingMenu} from './ListingMenu'
import RecentWorkouts from './RecentWorkouts'

const FavouriteScreen = (props) => {
  return (
    <View
      style={{flex: 1}}
    >
      <ScrollView>
        <ListingMenu items={props.favouriteListingItems} />

        <RecentWorkouts
          loadWorkout={props.onWorkoutSelect}
          recentWorkouts={props.recentWorkouts}
        />
      </ScrollView>
    </View>
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
