import React, {
  Image,
  PropTypes,
  StyleSheet
} from 'react-native'

import SearchNavigationBar from './SearchNavigationBar'
import TabView from './TabView'

const SearchIndex = (props) => {
  return (
    <Image
      source={require('../../../assets/images/background.png')}
      style={styles.container}
    >
      <SearchNavigationBar onClosePressed={props.onClosePressed} />
      <TabView
        categories={props.categories}
        onCategorySelect={props.onCategorySelect}
        workouts={props.workouts}
      />
    </Image>
  )
}

SearchIndex.propTypes = {
  categories: PropTypes.array,
  onCategorySelect: PropTypes.func,
  onClosePressed: PropTypes.func,
  workouts: PropTypes.array
}

const styles = StyleSheet.create({
  container: {}
})

export default SearchIndex
