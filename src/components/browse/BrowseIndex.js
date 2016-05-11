import React, {
  View,
  Image,
  Navigator
} from 'react-native'
import Mixpanel, * as MixpanelConfig from '../../constants/MixPanelConfigs'
import BrowseScreen from './BrowseScreen'
import BrowserNavigationBar from './BrowseNavigationBar'
import FavouriteScreen from './FavouriteScreen'

let navigator_ref = null
const BrowseIndex = (props) => {
  const onBrowseTabSelect = () => {
    props.onTabChanged('browse')
    navigator_ref.pop()
  }
  const onFavouriteTabSelect = () => {
    Mixpanel.track(MixpanelConfig.BROWSE_FAVOURITE)
    props.onTabChanged('favourite')
    navigator_ref.push({name: 'favourite'})
  }

  function _renderScene (route, navigator) {
    navigator_ref = navigator
    switch (route.name) {
      case 'browse':
        return (
          <BrowseScreen
            {...props}
          />)
      case 'favourite':
        return (
          <FavouriteScreen
            {...props}
            recentWorkouts={props.recentWorkouts}
          />
        )
      default:
        console.warn('Hello Deer!!!')
    }
  }
  return (
    <View
      style={{flex: 1}}
    >
      <BrowserNavigationBar
        goToProfile={props.goToProfile}
        onBrowseTabSelect={onBrowseTabSelect}
        onFavouriteTabSelect={onFavouriteTabSelect}
        onSearch={props.onSearch}
        selectedTab={props.selectedTab}
      />
      <Navigator
        configureScene={() => Navigator.SceneConfigs.FloatFromBottom}
        initialRoute={{name: 'browse'}}
        renderScene={_renderScene}
      />
    </View>
  )
}

BrowseIndex.propTypes = {
}

export default BrowseIndex
