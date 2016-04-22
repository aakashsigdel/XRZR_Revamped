import React, {
  View,
  PropTypes,
  StyleSheet
} from 'react-native'

import SearchNavigationBar from './SearchNavigationBar'
import TabView from './TabView'

const SearchIndex = (props) => {
  return (
    <View
      style={styles.container}
    >
      <SearchNavigationBar
        onClosePressed={props.onClosePressed}
        onSearchButton={props.onSearchButton}
        onSearchInput={props.onSearchInput}
        searchText={props.searchText}
      />
      <TabView
        categories={props.categories}
        loadWorkout={props.loadWorkout}
        onCategorySelect={props.onCategorySelect}
        workouts={props.workouts}
        searchOnProgress={props.searchOnProgress}
        style={{flex: 1}}
      />
    </View>
  )
}

SearchIndex.propTypes = {
  categories: PropTypes.array,
  onCategorySelect: PropTypes.func,
  onClosePressed: PropTypes.func,
  workouts: PropTypes.array
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  }
})

export default SearchIndex
