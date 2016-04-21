'use strict'

import React, {
  Image,
  TouchableOpacity,
  View
} from 'react-native'
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

  const customIcon = props.currentUserId === props.user.id
    ? <Icon
      name='android-more-vertical'
      size={35}
      color='white'
      backgroundColor='transparent'
    />
      : <FIcon
        name={(props.user.like) ? 'heart' : 'heart-o'}
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
        onPress={props.currentUserId === props.user.id? handleDotsPress : handleHeartPress}
        style={{ marginBottom: 5, marginRight: 5 }}
      >
        {customIcon}
      </TouchableOpacity>
    )
  }

  const _renderRightButton = ({currentUserId, userId, isInstructor}) => {
    console.log(currentUserId, userId, isInstructor, 'navi')
    if (currentUserId === userId || isInstructor) {
      return navRight
    }
    return {custom: (<View></View>)}
  }

  const rightParams = {
    currentUserId: props.currentUserId,
    userId: props.user.id,
    isInstructor: props.user.isInstructor
  }

  return (
    <Navigation
      left={navLeft}
      mid={{}}
      right={_renderRightButton(rightParams)}
      position='absolute'
    />
  )
}

export default ProfileNavigation
