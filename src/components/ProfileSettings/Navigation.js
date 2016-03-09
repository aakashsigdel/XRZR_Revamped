'use strict'

import React, { Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'
import Navigation from '../Navigation/Navigation'

const ProfileNavigation = (props) => {
  const navLeft = {
    custom: (
      <TouchableOpacity
        onPress={() => props.navigator.pop()}
      >
        <Image
          source={require('../../../assets/images/back.png')}
          style={{width: 20, height: 20, marginLeft: 8, marginBottom: 10}}
        />
      </TouchableOpacity>
    )
  }


  return (
    <Navigation
      left={navLeft}
      mid={{}}
      right={{}}
      position='absolute'
    />
  )
}

export default ProfileNavigation
