'use strict'

import React, {
  PropTypes,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import { VIEWPORT } from '../constants/appConstants'

const GhostButton = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onButtonPress}
      style={[
        styles.container,
        props.width && { width: props.width },
        props.height && { height: props.height },
        props.backgroundColor && { backgroundColor: props.backgroundColor }
      ]}>
      <Text style={[
        styles.text,
        props.color && { color: props.color },
        props.fontSize && { fontSize: props.fontSize },
        props.fontFamily && { fontFamily: props.fontFamily }
      ]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

GhostButton.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  onButtonPress: PropTypes.func.isRequired
}

GhostButton.defaultProps = {
  text: 'LOGIN WITH FACEBOOK'
}

const styles = StyleSheet.create({
  container: {
    width: 0.9 * VIEWPORT.width,
    height: 55,
    backgroundColor: 'rgba(35, 35, 35, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'SFUIDisplay-Regular'
  }
})

export default GhostButton

