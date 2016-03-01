import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'

import NavBar from './NavBar'
import ExerciseList from './ExerciseList'

const EditWorkoutExercisesIndex = (props) => {
  return (
    <View style={ styles.container }>
      <NavBar
        title='The undead sail awkwardly pulls the parrot.'
        onCloseButton={() => undefined}

      />
      <ExerciseList
        workout={props.workout}
      />
    </View>
  )
}

EditWorkoutExercisesIndex.propTypes = {}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  }
})

export default EditWorkoutExercisesIndex
