'use strict'

import React, {
  Component,
  PropTypes
} from 'react-native'
import PausePlayIndex from '../components/PausePlay/PausePlayIndex'

export default class PausePlay extends Component {
  render () {
    const onCloseButton = () => {
      this.props.navigator.pop()
      this.props.onCloseButton()
    }
    const onCountCompletion = () => {
      this.props.navigator.pop()
      this.props.onCountCompletion()
    }

    return (
      <PausePlayIndex
        nextExercise={this.props.nextExercise}
        onCloseButton={onCloseButton}
        onCountCompletion={onCountCompletion}
        pauseTime={this.props.pauseTime}
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
