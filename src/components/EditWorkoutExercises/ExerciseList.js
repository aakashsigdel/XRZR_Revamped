import React, {
  View,
  StyleSheet,
  PropTypes,
  Text,
  TouchableOpacity
} from 'react-native'

import ListWrapper from '../Common/ListWrapper'
import ExerciseListItem from './ExerciseListItem'
import EditExerciseListItem from './EditExerciseListItem'

const ExerciseList = (props) => {
  let indexCounter = 0
  const _populateList = (item) => {
    indexCounter += 1
    return (<EditExerciseListItem
      editOnProgress={true}
      index={indexCounter}
      item={item}
      onRemoveButton={() => undefined}
    />)
  }
  return (
    <View style={styles.container}>
      <View style={styles.listings} >
        <Text style={styles.header}>WORKOUT EXERCISES</Text>
        <ListWrapper
          _populateList={_populateList}
          data={props.workout.exercises}
        />
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={props.onSaveButton}
      >
        <Text style={styles.saveText}>
          SAVE
        </Text>
      </TouchableOpacity>
    </View>
  )
}

ExerciseList.propTypes = {}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  },
  listings: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14
  },
  header: {
    color: 'white',
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 11,
    paddingBottom: 10

  },
  saveButton: {
    backgroundColor: 'rgb(213,10,177)',
    paddingTop: 25,
    paddingBottom: 20
  },
  saveText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 14
  }
})

export default ExerciseList
