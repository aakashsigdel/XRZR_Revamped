import React, { Image, PropTypes, ScrollView } from 'react-native'
import Header from './Header'
import {TrendingWorkouts} from './Trendings'
import {ListingMenu} from './ListingMenu'
import {Categories} from './Categories'
import BrowserNavigationBar from './BrowseNavigationBar'
import StatusMessage from '../Common/StatusMessage'

const BrowserScreen = (props) => {
  return (
    <Image
      source={require('../../../assets/images/background.png')}
      style={{flex: 1}}
    >
      <BrowserNavigationBar
        onBrowseTabSelect={props.onBrowseTabSelect}
        onFavouriteTabSelect={props.onFavouriteTabSelect}
        onSearch={props.onSearch}
        selectedTab='browse'
        goToProfile={props.goToProfile}
      />
      <ScrollView>
        <Header
          featured={props.featured}
          onWorkoutSelect={props.onWorkoutSelect}
        />
        <TrendingWorkouts
          onWorkoutSelect={props.onWorkoutSelect}
          trends={props.trendings}
        />
        <ListingMenu items={props.browseListingItems} />
        <Categories
          categories={props.categories}
          onCategorySelect={props.onCategorySelect}
        />
      </ScrollView>
      <StatusMessage visible={false}/>

    </Image>
  )
}

BrowserScreen.propTypes = {
  browseListingItems: PropTypes.array,
  categories: PropTypes.array,
  featured: PropTypes.array,
  onBrowseTabSelect: PropTypes.func,
  onCategorySelect: PropTypes.func,
  onFavouriteTabSelect: PropTypes.func,
  onSearch: PropTypes.func,
  onWorkoutSelect: PropTypes.func,
  trendings: PropTypes.array
}

export default BrowserScreen
