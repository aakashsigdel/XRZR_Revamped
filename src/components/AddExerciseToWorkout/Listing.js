'use strict'

import React, {
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const updateWorkout = (exerciseId, workout, props) => {
  let exercises = workout.exercises
  workout.exercises.indexOf(exerciseId) === -1 ? exercises.push(exerciseId): null
  const updateObject = {
    id: workout.id,
    exercises
  }
  props.updateWorkout(updateObject)
  props.popRoute()
}

const _renderRow = (rowData, props) => {
  return (
    <TouchableOpacity
      style={styles.rowContainer}
      onPress={_ => updateWorkout(props.exercise.id, rowData, props)}
    >
      <Text style={styles.text}>
        {rowData.title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

const Listing = props => {
  let ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  })
  let dataSource = ds.cloneWithRows(props.workouts)

  return (
    <ListView
      dataSource={ dataSource }
      renderRow={
        rowData => {
          return _renderRow(rowData, props)
        }
      }
    />
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    padding: 20,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1
  },
  text: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    fontWeight: '700'
  }
})

export default Listing
