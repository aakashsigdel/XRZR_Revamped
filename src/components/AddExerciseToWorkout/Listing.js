'use strict'

import React, {
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

import Hr from '../Common/Hr'

const updateWorkout = (exerciseId, workoutId, props) => {
  const updateObject = {
    workoutId,
    exerciseId
  }
  props.setWorkoutId(workoutId)
  props.updateWorkout(updateObject)
  props.handleNewWorkoutPress(workoutId)
}

const _renderRow = (rowData, props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => updateWorkout(props.exercise.exerciseId, rowData.id, props)}
      >
        <Text style={styles.text}>
          {rowData.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
      <Hr />
    </View>
  )
}

const Listing = (props) => {
  let ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  })
  let dataSource = ds.cloneWithRows(props.workouts)

  return (
    <ListView
      dataSource={dataSource}
      renderRow={
        (rowData) => {
          return _renderRow(rowData, props)
        }
      }
    />
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    padding: 20,
    //borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    //borderBottomWidth: 1
  },
  text: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    fontWeight: '700'
  }
})

export default Listing
