'use strict'

import React, {
  PropTypes,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  getActiveOpacity,
  getElement
} from './utilities'
import { HEADERBAR_HEIGHT } from '../../constants/appConstants'

const NavigationElement = props => {
  return (
    <TouchableOpacity
      activeOpacity={getActiveOpacity(props.onButtonClick)}
      onPress={props.onButtonClick}
      style={styles.touch}
    >
      { getElement(props.text, props.custom, props.style) }
    </TouchableOpacity>
  )
}

NavigationElement.propTypes = {
  text: PropTypes.string,
  custom: PropTypes.element,
  style: PropTypes.object,
  onButtonClick: PropTypes.func
}

NavigationElement.defaultProps = {
  style: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'SFCompactDisplay-Light'
  }
}

const styles = StyleSheet.create({
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NavigationElement
