'use strict'

import React, {
  Component,
  PropTypes
} from 'react-native'
import PausePlayIndex from '../components/PausePlay/PausePlayIndex'
import Orientation from 'react-native-orientation'
import {connect} from 'react-redux'

class PausePlay extends Component {
  componentDidMount () {
    Orientation.unlockAllOrientations()
  }

  render () {
    const onCloseButton = () => {
      this.props.onCloseButton()
    }
    const onCountCompletion = () => {
      this.props.onCountCompletion()
    }

    return (
      <PausePlayIndex
        nextExercise={this.props.nextExercise}
        onCloseButton={onCloseButton}
        onCountCompletion={onCountCompletion}
        orientation={this.props.uiStates.orientation}
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

export default connect(
  (state) => {
    return {
      uiStates: state.uiStates
    }
  }
)(PausePlay)
