'use strict'

import React from 'react-native'
import { connect } from 'react-redux'

import MostPopularIndex from '../components/MostPopular/MostPopularIndex'

const _mapMostPopularWorkout = (mostPopularWorkout, workout, instructor) => {
  return mostPopularWorkout.map( mPworkout => {
    return {
      ...workout[mPworkout],
      'instructor': instructor[workout[mPworkout].instructor]
    }
  })
}

const MostPopular = props => {
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
    />
  )
}

export default connect(
  state => ({ state })
)(MostPopular)
