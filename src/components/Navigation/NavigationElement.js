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

const NavigationElement = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={getActiveOpacity(props.onButtonClick)}
      onPress={props.onButtonClick}
      style={styles.touch}
    >
      {getElement(props.text, props.custom, props.style)}
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
    fontFamily: 'SFCompactDisplay-Light',
    marginBottom: 10
  }
}

const styles = StyleSheet.create({
  touch: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NavigationElement
