import React, {
  ListView,
  StyleSheet,
  PropTypes
} from 'react-native'
import ExerciseListingItem from './ExerciseListingItem'

const ExerciseListing = (props) => {
  function _populateList (item, index) {
    return (
      <ExerciseListingItem
        item={item}
        onWorkoutSelect={props.onWorkoutSelect}
      />)
  }

  return (
    <ListView
      dataSource={_getDataSource(props.data)}
      renderRow={_populateList}
      style={styles.container}
    />
  )
}

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

function _getDataSource (itemList) {
  return dataSource.cloneWithRows(itemList)
}

ExerciseListing.propTypes = {
  data: PropTypes.array,
  onWorkoutSelect: PropTypes.func
}

const styles = StyleSheet.create({
  container: {}
})

export default ExerciseListing
