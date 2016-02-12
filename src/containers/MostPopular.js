'use strict'

import React from 'react-native'
import { connect } from 'react-redux'

import MostPopularIndex from '../components/MostPopular/MostPopularIndex'

const _mapMostPopularWorkout = (mostPopularWorkout, workout) => {
  return mostPopularWorkout.map( mPworkout => {
    return workout[mPworkout]
  })
}

const MostPopular = props => {
  console.log(props)
  console.log(_mapMostPopularWorkout(props.state.mostPopularWorkout, props.state.workout))
  return (
    <MostPopularIndex
      mostPopularWorkout={
        _mapMostPopularWorkout(props.state.mostPopularWorkout, props.state.workout)
      }
    />
  )
}

export default connect(
  state => ({ state })
)(MostPopular)
