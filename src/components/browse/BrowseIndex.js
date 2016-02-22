import React, { Navigator, PropTypes } from 'react-native'
import BrowseScreen from './BrowseScreen'
import FavouriteScreen from './FavouriteScreen'

const BrowseIndex = (props) => {

  function _renderScene (route, navigator) {
    let onBrowseTabSelect = () => navigator.replace({name: 'browse'})
    let onFavouriteTabSelect = () => navigator.replace({name: 'favourite'})

    switch (route.name) {
      case 'browse':
        return (
          <BrowseScreen
            {...props}
            onBrowseTabSelect={onBrowseTabSelect}
            onFavouriteTabSelect={onFavouriteTabSelect}
          />)
      case 'favourite':
        return (
          <FavouriteScreen
            {...props}
            onBrowseTabSelect={onBrowseTabSelect}
            onFavouriteTabSelect={onFavouriteTabSelect}
            recentWorkouts={props.recentWorkouts}
          />
        )
      default:
        console.warn('Hello Deer!!!')
    }
  }
  return (
    <Navigator
      initialRoute={{name: 'browse'}}
      renderScene={_renderScene}
    />
  )
}

BrowseIndex.propTypes = {
}

export default BrowseIndex
