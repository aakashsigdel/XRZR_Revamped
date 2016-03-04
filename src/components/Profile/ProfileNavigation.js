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

  const customIcon = !props.user.isInstructor
    ? <Icon
      name='android-more-vertical'
      size={35}
      color='white'
      backgroundColor='transparent'
    />
      : <FIcon
        name='heart-o'
        size={25}
        color='rgba(255, 255, 255, 0.5)'
        backgroundColor='transparent'
      />

  const handleDotsPress = () => {
    props.handlePressOptions('dots')
  }

  const handleHeartPress = () => {
    props.handlePressOptions('heart')
  }

  const navRight = {
    custom: (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.user.isInstructor ? handleHeartPress : handleDotsPress}
        style={{ marginBottom: 5, marginRight: 5 }}
      >
        {customIcon}
      </TouchableOpacity>
    )
  }

  return (
    <Navigation
      left={navLeft}
      mid={{}}
      right={navRight}
      position='absolute'
    />
  )
}

export default ProfileNavigation
