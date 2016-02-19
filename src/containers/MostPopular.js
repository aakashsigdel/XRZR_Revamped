'use strict'

import React, { PropTypes } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadWorkout } from '../redux_x/actions/videoActionCreators'

import MostPopularIndex from '../components/MostPopular/MostPopularIndex'

const _mapMostPopularWorkout = (mostPopularWorkout, workout, instructor) => {
  return mostPopularWorkout.map((mPworkout) => {
    return {
      ...workout[mPworkout],
      'instructor': instructor[workout[mPworkout].instructor]
    }
  })
}

const MostPopular = (props) => {
  const _loadWorkout = (id) => {
    props.loadWorkout(id)
    props.navigator.push({
      name: 'workoutIntro'
    })
  }

  const handlePressOnSearch = () => {
    props.navigator.push({name: 'search'})
  }


  return (
    <MostPopularIndex
      navigator={props.navigator}
      mostPopularWorkout={
        _mapMostPopularWorkout(
          props.state.mostPopularWorkout,
          props.state.workout,
          props.state.instructor
        )
      }
      loadWorkout={_loadWorkout}
      handlePressOnSearch={handlePressOnSearch}
    />
  )
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
  (state) => ({ state }),
  (dispatch) => bindActionCreators({ loadWorkout }, dispatch)
)(MostPopular)
