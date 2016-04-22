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

    const isLoading = props.mostPopularWorkout.isFetching

    const handlePressOnSearch = () => {
      props.navigator.push({ name: 'search' })
    }

    const mostPopularWorkout = _mapMostPopularWorkout(
      props.mostPopularWorkout.data,
      props.workouts,
      props.instructors
    )

    return (
      <MostPopularIndex
        navigator={props.navigator}
        mostPopularWorkout={mostPopularWorkout}
        loadWorkout={_loadWorkout}
        handlePressOnSearch={handlePressOnSearch}
        isLoading={isLoading}
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
    mostPopularWorkout: state.mostPopularWorkout,
    workouts: state.workout.data,
    instructors: state.user.data
  }),
  (dispatch) => {
    return {
      loadWorkout: bindActionCreators(loadWorkout, dispatch),
      MostPopularDispatcher: bindActionCreators(MostPopularActionCreators, dispatch)
    }
  }
)(MostPopular)
