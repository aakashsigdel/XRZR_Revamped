import React, { ListView, View, StyleSheet } from 'react-native'
import ExerciseListingItem from './ExerciseListingItem'

const ExerciseListing = (props) => {
  function _populateList(item, index){
    return <ExerciseListingItem item={item}
                                onWorkoutSelect={props.onWorkoutSelect}
    />
  }

  return (
    <ListView style={ styles.container }
              dataSource={_getDataSource(props.data)}
              renderRow={_populateList}
    />
  )
}

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

function _getDataSource(itemList){
  return dataSource.cloneWithRows(itemList)
}

const styles = StyleSheet.create({
  container: {}
})

export default ExerciseListing