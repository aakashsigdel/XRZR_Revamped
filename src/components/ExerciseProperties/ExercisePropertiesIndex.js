import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'

import ExercisePropertiesNavBar from './ExercisePropertiesNavBar'
import ExerciseDetails from './ExerciseDetails'
import ActionButtons from './PropertyActionButtons'
import DeleteExercise from './DeleteExercise'

const ExercisePropertiesIndex = (props) => {
  return (
    <View style={ styles.container }>
      <ExercisePropertiesNavBar
        onCloseButton={props.onCloseButton}
        onDeleteButton={props.onDeleteButton}
      />
      <ExerciseDetails
        exercise={props.exercise}
        isNewExercise={props.isNewExercise}
      />
      <ActionButtons
        isNewExercise={props.isNewExercise}
        toggleModalState={props.toggleModalState}
      />
      <DeleteExercise
        exercise={props.exercise}
        onDeleteButton={props.onDeleteConfirm}
        onNopeButton={props.onNopeConfirm}
        visible={props.modalVisibility}
      />
    </View>
  )
}

ExercisePropertiesIndex.propTypes = {}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  }
})

export default ExercisePropertiesIndex
