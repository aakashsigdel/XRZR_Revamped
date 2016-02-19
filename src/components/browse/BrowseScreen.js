import React, { Image, PropTypes, ScrollView } from 'react-native'
import Header from './Header'
import {TrendingWorkouts} from './Trendings'
import {ListingMenu} from './ListingMenu'
import {Categories} from './Categories'
import BrowserNavigationBar from './BrowseNavigationBar'

const BrowserScreen = (props) => {
  return (
    <Image
      source={require('../../../assets/images/background.png')}
      style={{flex: 1}}
    >
      <BrowserNavigationBar onSearch={props.onSearch} />
      <ScrollView>
        <Header
          featured={props.featured}
          onWorkoutSelect={props.onWorkoutSelect}
        />
        <TrendingWorkouts
          onWorkoutSelect={props.onWorkoutSelect}
          trends={props.trendings}
        />
        <ListingMenu items={props.listingItems} />
        <Categories
          categories={props.categories}
          onCategorySelect={props.onCategorySelect}
        />
      </ScrollView>

    </Image>
  )
}

BrowserScreen.propTypes = {
  categories: PropTypes.array,
  featured: PropTypes.array,
  listingItems: PropTypes.array,
  onCategorySelect: PropTypes.func,
  onSearch: PropTypes.func,
  onWorkoutSelect: PropTypes.func,
  trendings: PropTypes.array
}

export default BrowserScreen
