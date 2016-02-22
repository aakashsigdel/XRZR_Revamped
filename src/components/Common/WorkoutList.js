import React, { ListView, StyleSheet, PropTypes } from 'react-native'

import WorkoutListItem from './WorkoutListItem'

const WorkoutList = (props) => {
  const _populateList = (item, index) => (
    <WorkoutListItem
      item={item}
      loadWorkout={props.loadWorkout}
    />
  )

  return (
    <ListView
      dataSource={_getDataSource(props.data)}
      renderRow={_populateList}
      style={styles.container}
    />
  )
}

WorkoutList.propTypes = {
  data: PropTypes.array,
  loadWorkout: PropTypes.func
}
const styles = StyleSheet.create({
  container: {}
})

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

function _getDataSource (itemList) {
  return dataSource.cloneWithRows(itemList)
}

export default WorkoutList
