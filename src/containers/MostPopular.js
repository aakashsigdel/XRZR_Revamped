'use strict'

import React, { PropTypes } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadWorkout } from '../redux_x/actions/videoActionCreators'
import * as MostPopularActionCreators from '../redux_x/actions/mostPopularWorkoutsActionCreators'

import MostPopularIndex from '../components/MostPopular/MostPopularIndex'

const _mapMostPopularWorkout = (mostPopularWorkout, workout, instructor) => {
  return mostPopularWorkout.map((mPworkout) => {
    return {
      ...workout[mPworkout],
      instructor: instructor[workout[mPworkout].instructor]
    }
  })
}

class MostPopular extends React.Component {
  componentDidMount () {
    this.props.MostPopularDispatcher.fetchMostPopularWorkouts()
  }
  render (props = this.props) {
    const _loadWorkout = (id) => {
      props.loadWorkout(id)
      props.navigator.push({
        name: 'workoutIntro'
      })
    }

    const handlePressOnSearch = () => {
      props.navigator.push({ name: 'search' })
    }
    
    return (
      <MostPopularIndex
        navigator={props.navigator}
        mostPopularWorkout={
          _mapMostPopularWorkout(
            props.mostPopularWorkout,
            props.workouts,
            props.instructors
          )
        }
        loadWorkout={_loadWorkout}
        handlePressOnSearch={handlePressOnSearch}
      />
    )
  }
}

// -----
// PropTypes
// -----
MostPopular.propTypes = {
  state: PropTypes.object,
  loadWorkout: PropTypes.func,
  navigator: PropTypes.object
}

// -----
// connect
// -----
export default connect(
  (state) => ({
    mostPopularWorkout: state.mostPopularWorkout.data,
    workouts: state.workout.data,
    instructors: state.instructor
  }),
  (dispatch) => {
    return {
      loadWorkout: bindActionCreators(loadWorkout, dispatch),
      MostPopularDispatcher: bindActionCreators(MostPopularActionCreators, dispatch)
    }
  }
)(MostPopular)
