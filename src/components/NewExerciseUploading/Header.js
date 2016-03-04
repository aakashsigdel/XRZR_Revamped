'use strict'

import React, {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { BlurView } from 'react-native-blur'

const Header = (props) => {
  console.log(props)
  return (
    <Image
      source={{uri: props.user.image}}
      style={styles.headerImage}
    >
      <BlurView
        blurType={'light'}
        style={styles.blur}
      >
        <Image
          source={{uri: props.user.image}}
          style={styles.profileImage}
        />
        <Text style={styles.text}>
          {props.exercise.title + ' by'}
        </Text>
        <Text style={styles.text}>
          {props.user.name}
        </Text>
      </BlurView>
    </Image>
  )
}

const styles = StyleSheet.create({
  blur: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60
  },
  headerImage: {
    height: 211
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginBottom: 19.5
  },
  text: {
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    fontWeight: '700',
    color: 'white'
  }
})
export default Header
