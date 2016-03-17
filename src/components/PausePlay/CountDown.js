'use strict'

import React, {
  PropTypes,
  StyleSheet,
  Text
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

const CountDown = (props) => {
  const count = props.pauseTime - (props.count / 100 * props.pauseTime)
  let countDownNumber = count > 9 ? count : '0' + count
  return (
    <AnimatedCircularProgress
      size={props.size}
      width={props.width}
      fill={props.count}
      tintColor={props.tintColor}
      backgroundColor={props.backgroundColor}
    >
      {
        (fill) => (
          <Text style={[
            styles.points,
            {
              fontSize: props.size * 0.556,
              left: 0.182 * props.size,
              top: 0.142 * props.size
            }
          ]}>
            {countDownNumber}
          </Text>
        )
      }
    </AnimatedCircularProgress>
  )
}

CountDown.defaultProps = {
  size: 175,
  width: 5,
  tintColor: '#3D5875',
  backgroundColor: 'white'
}

CountDown.propTypes = {
  count: PropTypes.number.isRequired,
  pauseTime: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 32,
    top: 25,
    color: 'white',
    fontSize: 97.5,
    fontFamily: 'SFCompactText-Regular',
    textAlign: 'center'
  }
})
export default CountDown
