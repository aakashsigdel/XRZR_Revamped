'use strict'

import React, {
  Component,
  Modal,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Navigation from './Navigation'
import CountDown from './CountDown'

export default class PausePlayIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.pauseTime = props.pauseTime
  }
  componentWillMount () {
    const delay = () => {
      if (this.state.count >= 100) {
        this.props.onCountCompletion()
        return
      }

      this.setState({
        count: this.state.count + 100 / this.pauseTime
      })
      setTimeout(delay.bind(this), 1000)
    }
    delay(this)
  }

  _renderNextExercise (nextExercise) {
    if (nextExercise) {
      return (
        <Text style={styles.nextExercise}>
          {'NEXT ' + this.props.nextExercise}
        </Text>
      )
    } else {
      return (
        <Text style={styles.nextExercise} />
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Navigation onCloseButton={this.props.onCloseButton} />
        <View style={styles.container}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>
              {this.props.title}
            </Text>
          </View>
          <View style={styles.countDownContainer}>
            <CountDown
              count={this.state.count}
              pauseTime={this.pauseTime}
            />
          </View>
          {this._renderNextExercise(this.props.nextExercise)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B61B9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleTextContainer: {
    flex: 2.3,
    justifyContent: 'flex-end'
  },
  titleText: {
    color: 'white',
    fontSize: 31,
    fontFamily: 'SFUIText-Light'
  },
  countDownContainer: {
    flex: 3.8,
    justifyContent: 'center'
  },
  nextExercise: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
    fontFamily: 'SFUIText-Regular',
    flex: 3.46
  }
})
