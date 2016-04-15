import React, {
  PropTypes,
  ScrollView,
  View
} from 'react-native'
import Header from './Header'
import {TrendingWorkouts} from './Trendings'
import {ListingMenu} from './ListingMenu'
import {Categories} from './Categories'

import StatusMessage from '../Common/StatusMessage'

const BrowserScreen = (props) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Header
          featured={props.featured}
          onWorkoutSelect={props.onWorkoutSelect}
          isFeaturedLoading={props.isFeaturedLoading}
        />
        <TrendingWorkouts
          onWorkoutSelect={props.onWorkoutSelect}
          trends={props.trendings}
          isTrendingLoading={props.isTrendingLoading}
        />
        <ListingMenu items={props.browseListingItems} />
        <Categories
          categories={props.categories}
          onCategorySelect={props.onCategorySelect}
        />
      </ScrollView>
      <StatusMessage visible={false}/>
    </View>
  )
}

BrowserScreen.propTypes = {
  browseListingItems: PropTypes.array,
  categories: PropTypes.array,
  featured: PropTypes.array,
  onCategorySelect: PropTypes.func,
  onSearch: PropTypes.func,
  onWorkoutSelect: PropTypes.func,
  trendings: PropTypes.array
}

export default BrowserScreen
