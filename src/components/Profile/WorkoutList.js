'use strict'

import React, {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { VIEWPORT } from '../../constants/appConstants'

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})
const WorkoutList = (props) => {
  const _renderRow = (rowData) => {
    if (rowData.error) {
      return (
        <View style={styles.row}>
          <Text style={styles.workoutTitle}>
            {rowData.error}
          </Text>
        </View>
      )
    }
    const workoutTitle = rowData.title.length > 15
      ? rowData.title.slice(0, 30) + '...'
      : rowData.title
    return (
      <TouchableOpacity
        onPress={() => props.goToWorkoutIntro(rowData.id)}
        activeOpacity={0.6}
        style={styles.row}
      >
        <Image
          style={styles.image}
          source={{uri: rowData.image_16x9}}
        />
        <Text style={styles.workoutTitle}>{workoutTitle}</Text>
      </TouchableOpacity>
    )
  }

  const dataSource = props.favouriteWorkouts.length === 0
    ? ds.cloneWithRows([{error: 'NO WORKOUT TO DISPLAY'}])
    : ds.cloneWithRows(props.favouriteWorkouts)
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        MY WORKOUT
      </Text>
      <ListView
        dataSource={dataSource}
        renderRow={_renderRow}
        horizontal
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    marginTop: 13
  },
  row: {
    marginRight: 10
  },
  image: {
    width: 150 * VIEWPORT.height / 667,
    height: 84 * VIEWPORT.height / 667,
    borderRadius: 5
  },
  titleText: {
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 11,
    color: 'white',
    marginBottom: 7.5
  },
  workoutTitle: {
    fontFamily: 'SFUIDisplay-Regular',
    fontSize: 10,
    color: 'white'
  }
})

export default WorkoutList
