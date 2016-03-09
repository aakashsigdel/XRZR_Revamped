'use strict'

import React, {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { BlurView } from 'react-native-blur'
import { VIEWPORT } from '../../constants/appConstants'
import Icon from 'react-native-vector-icons/Ionicons'

const _renderTick = (isInstructor) => {
  if (isInstructor) {
    return (
      <Image
        source={require('../../../assets/images/tickIcon.png')}
        style={styles.tickIcon}
      />
    )
  }
}
const Cover = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: props.user.image}}
        style={styles.coverImage}
      >
        <BlurView
          blurType={'light'}
          style={styles.blur}
        >
          <Image
            source={{uri: props.user.image}}
            style={styles.profileImage}
          >
          </Image>
          {_renderTick(props.user.isInstructor)}
          <Text style={styles.profileName}>
            {props.user.name}
          </Text>
        </BlurView>
      </Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  coverImage: {
    flex: 1
  },
  blur: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20
  },
  profileImage: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 120 * VIEWPORT.height / 667,
    height: 120 * VIEWPORT.height / 667,
    borderRadius: 60 * VIEWPORT.height / 667,
    marginBottom: 10
  },
  tickIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: VIEWPORT.width / 2.8,
    top: VIEWPORT.height / 4.5
  },
  profileName: {
    fontFamily: 'SFUIText-Light',
    fontSize: 31 * VIEWPORT.height / 667,
    color: 'white'
  }
})
export default Cover
