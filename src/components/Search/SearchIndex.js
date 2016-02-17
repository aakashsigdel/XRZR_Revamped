import React, { Image, View, StyleSheet } from 'react-native'

import SearchNavigationBar from './SearchNavigationBar'
import TabView from './TabView'

const SearchIndex = (props) => {
  return (
    <Image
      source={require("../../../assets/images/background.png")}
      style={ styles.container }
    >
      <SearchNavigationBar onClosePressed={props.onClosePressed} />
      <TabView
        workouts={props.workouts}
        categories={props.categories}
        onCategorySelect={props.onCategorySelect}
      />
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default SearchIndex