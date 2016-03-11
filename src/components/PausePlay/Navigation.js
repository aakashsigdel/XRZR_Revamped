'use strict'

import React, {
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import CommonNavigation from '../Navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const Navigation = (props) => {
  const leftIcon = (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => props.goToProfile(1)}
      style={styles.roundIcon}
    >
      <Icon
        color='rgba(255, 255, 255, 0.7)'
        name='ios-close-empty'
        size={50}
      />
    </TouchableOpacity>
  )

  return (
    <CommonNavigation
      left={{custom: leftIcon}}
      mid={{}}
      right={{}}
    />
  )
}

var styles = StyleSheet.create({
  roundIcon: {
    marginBottom: -10,
    marginLeft: 5
  }
})

export default Navigation
