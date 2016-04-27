'use strict'

import React, {
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import CommonNavigation from '../Navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const Navigation = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onCloseButton}
      style={styles.roundIcon}
    >
      <Icon
        color='rgba(255, 255, 255, 0.7)'
        name='ios-close-empty'
        size={50}
      />
    </TouchableOpacity>
  )
}

var styles = StyleSheet.create({
  roundIcon: {
    position: 'absolute',
    left: 10,
    top: 15
  }
})

export default Navigation
