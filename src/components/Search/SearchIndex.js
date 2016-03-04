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
      <SearchNavigationBar onClosePressed={props.onClosePressed} />
      <TabView
        categories={props.categories}
        onCategorySelect={props.onCategorySelect}
        loadWorkout={props.loadWorkout}
        workouts={props.workouts}
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
    backgroundColor: 'black'
  }
})

export default SearchIndex
