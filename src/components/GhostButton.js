'use strict'

import React, {
  PropTypes,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { VIEWPORT } from '../constants/appConstants'

const GhostButton = props => {
  return (
    <View
      style={[
        styles.container,
        props.with && { width: props.width },
        props.height && { height: props.height },
        props.backgroundColor && { backgroundColor: props.backgroundColor }
      ]}>
      <Text style={[
        styles.text,
        props.color && { color: props.color },
        props.fontSize && { fontSize: props.fontSize },
        props.fontFamily && { fontFamily: props.fontFamily }
      ]}>{props.text}</Text>
    </View>
  )
}

GhostButton.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string
}

GhostButton.defaultProps = {
  text: 'LOGIN WITH FACEBOOK'
}

const styles = StyleSheet.create({
  container: {
    width: 0.8 * VIEWPORT.width,
    height: 40,
    backgroundColor: 'rgba(35, 35, 35, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
})

export default GhostButton

