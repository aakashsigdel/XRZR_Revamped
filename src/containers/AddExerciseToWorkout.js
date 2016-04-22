'use strict'

import React, {
  Component,
  PropTypes,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddExerciseToWorkoutIndex from '../components/AddExerciseToWorkout/AddExerciseToWorkoutIndex'
import { updateWorkoutExercises } from '../redux_x/actions/workoutActionCreators'
import { fetchUserWorkouts } from '../redux_x/actions/userDataActionCreators'
import { loadWorkout } from '../redux_x/actions/videoActionCreators'
import Loader from '../components/Common/Loader'
import StatusMessage from '../components/Common/StatusMessage'

const popRoute = (navigator) => {
  navigator.pop()
}


export default class AddExerciseToWorkout extends Component {
  constructor () {
    super()
    this.state = {
      isFetching: true,
      isPosting: false,
      showModal: false,
      workoutId: null // not needed remove this
    }
  }
  componentDidMount () {
    this.props.fetchUserWorkouts(this.props.login.id)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.userWorkouts.isFetching && !this.props.userWorkouts.isFetching) {
      this.setState({
        isFetching: false
      })
    } else if (prevProps.workouts.isFetching && !this.props.workouts.isFetching) {
      this.setState({
        isPosting: false,
        showModal: true
      })
    }
  }

  // not needed remove this
  setWorkoutId (workoutId) {
    this.setState({ workoutId })
  }

  handleNewWorkoutPress (workoutId) {
    console.log(workoutId, 'iphone wrokoutid')
    this.setState({
      isPosting: true
    })
  }

  onExitModal () {
    this.setState({
      showModal: false
    })
    this.props.navigator.pop()
  }

  render (props = this.props) {
    if (this.state.isFetching) {
      return <Loader loadingText='Fetching Workouts...' />
    } else if (this.state.isPosting) {
      return <Loader loadingText='Adding exercise to workout...' />
    }
    let workouts = Object.keys(props.userWorkouts.data).map((item) => {
      return props.userWorkouts.data[item]
    })
    return (
      <View>
        <AddExerciseToWorkoutIndex
          workouts={workouts}
          exercise={props.exercises[props.exerciseId]}
          navigator={props.navigator}
          updateWorkout={(params) => props.updateWorkoutExercises(params)}
          popRoute={() => popRoute(props.navigator)}
          handleNewWorkoutPress={(workoutId) => this.handleNewWorkoutPress(workoutId)}
          setWorkoutId={(workoutId) => this.setWorkoutId(workoutId)}
        />
        <StatusMessage
          visible={this.state.showModal}
          statusMessage={'Exercise Added'}
          transparent
          onExit={() => this.onExitModal()}
        />
      </View>
    )
  }
}

// -------
// PropTypes
// -------
AddExerciseToWorkout.propTypes = {
  exercises: PropTypes.object,
  userWorkouts: PropTypes.object,
  dispatch: PropTypes.func,
}

// -----
// connect
// -----
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserWorkouts: bindActionCreators(fetchUserWorkouts, dispatch),
    loadWorkout: bindActionCreators(loadWorkout, dispatch),
    updateWorkoutExercises: bindActionCreators(updateWorkoutExercises, dispatch)
  }
}

const mapStateToProps = (state) => {
  return {
    exercises: state.exercise,
    login: state.login,
    userWorkouts: state.userData.userWorkouts,
    workouts: state.workout
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddExerciseToWorkout)
