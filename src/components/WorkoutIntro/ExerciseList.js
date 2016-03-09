import React, { ListView, View, StyleSheet } from 'react-native'

import ExerciseListItem from './ExerciseListItem'

const ExerciseList = (props) => {
  function _populateList (item, index) {
    return <ExerciseListItem
      item={item}
      index={index}
      onItemSelect={props.onExerciseSelect}
      // onWorkoutSelect={props.onWorkoutSelect}
    />
  }
  return (
    <View style={styles.container}>
      <ListView dataSource={_getDataSource(props.exercises)}
        renderRow={_populateList}
      />
    </View>
  )
}

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

const _getDataSource = (itemList) => {
  return dataSource.cloneWithRows(itemList)
}

const styles = StyleSheet.create({
  container: {}
})

export default ExerciseList
