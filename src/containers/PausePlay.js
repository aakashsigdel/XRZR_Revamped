'use strict'

import React, {
  Component,
  PropTypes
} from 'react-native'
import PausePlayIndex from '../components/PausePlay/PausePlayIndex'

export default class PausePlay extends Component {
  render () {
    return (
      <PausePlayIndex
        pauseTime={this.props.pauseTime}
        nextExercise={this.props.nextExercise}
        title={this.props.title}
      />
    )
  }
}

PausePlay.propTypes = {
  pauseTime: PropTypes.number.isRequired,
  nextExercise: PropTypes.string,
  title: PropTypes.string.isRequired
}

PausePlay.defaultProps = {
  pauseTime: 10,
  title: 'STARTING IN'
}
