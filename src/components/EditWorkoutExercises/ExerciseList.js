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
  let indexCounter = -1
  const _populateList = (item) => {
    indexCounter += 1
    if (props.editOnProgress) {
      return (<EditExerciseListItem
        index={indexCounter}
        item={item}
        onRemoveButton={props.onRemoveButton}
      />)
    }
    return (<ExerciseListItem
      index={indexCounter}
      item={item}
    />)
  }
  return (
    <View style={styles.container}>
      <View style={styles.listings} >
        <Text style={styles.header}>WORKOUT EXERCISES</Text>
        <ListWrapper
          _populateList={_populateList}
          data={props.exercises}
        />
      </View>
      <TouchableOpacity
        onPress={props.onSaveButton}
        style={styles.saveButton}
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
