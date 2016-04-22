import React, {
  View,
  StyleSheet,
  PropTypes
} from 'react-native'

import NavBar from './NavBar'
import ExerciseList from './ExerciseList'
import StatusMessage from '../../components/Common/StatusMessage'

class EditWorkoutExercisesIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editOnProgress: props.editOnProgress,
      order: props.workout.exercises.map((value, index) => index),
      exercises: props.workout.exercises,

      showModal: false
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.uiStates.editWorkoutExercisesOnProgress && !this.props.uiStates.editWorkoutExercisesOnProgress){
      this.setState({
        showModal: true
      })
    }
  }

  onEdit () {
    this.setState({
      editOnProgress: true
    })
  }
  onDone () {
    this.setState({
      editOnProgress: false
    })
  }
  onExerciseRemove (index) {
    const exercises = this.state.exercises.slice(0, index)
      .concat(this.state.exercises.slice(index + 1, this.state.exercises.length))
    const order = this.state.order.slice(0, index)
      .concat(this.state.order.slice(index + 1, this.state.order.length))
    this.setState({
      exercises: exercises,
      order: order
    })
  }

  render (props = this.props) {
    const onSaveButton = (exerciseOrder) => {
      props.onSaveButton(exerciseOrder)
      this.setState({
        editOnProgress: false
      })
    }
    const onModalExit = () => this.setState({showModal: false})

    return (
      <View style={ styles.container }>
        <NavBar
          editOnProgress={this.state.editOnProgress}
          title={props.workout.title}
          onCloseButton={props.onCloseButton}

          onEdit={this.onEdit.bind(this)}
          onDone={this.onDone.bind(this)}
        />
        <ExerciseList
           editOnProgress={this.state.editOnProgress}
           exercises={this.state.exercises}
           onRemoveButton={this.onExerciseRemove.bind(this)}
           onSaveButton={onSaveButton}
         />
        <StatusMessage
          onExit={onModalExit}
          statusMessage='Exercises reordered.'
          transparent
          visible={this.state.showModal}
        />
      </View>
    )
  }
}

EditWorkoutExercisesIndex.propTypes = {}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  }
})

export default EditWorkoutExercisesIndex
