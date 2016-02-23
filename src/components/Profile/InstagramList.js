'use strict'

import React, {
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { VIEWPORT } from '../../constants/appConstants'

const _renderPhotos = () => {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return list.map((photo, index) => {
    return (
      <Image
        key={index}
        source={{uri: 'http://aakashsigdel.github.io/XRZR_Files/Workout/stina%20troest%201.png'}}
        style={styles.image}
      />
    )
  })
}

const InstagramList = (props) => {
  return (
    <View style={styles.container}>
      {_renderPhotos()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingLeft: 5,
    paddingRight: 5
  },
  image: {
    height: 170 * VIEWPORT.height / 667,
    width: 170 * VIEWPORT.height / 667,
    borderRadius: 5,
    marginBottom: 12.5 * VIEWPORT.height / 667
  },
  titleText: {
    flex: 1,
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 11,
    color: 'white',
    marginBottom: 7.5
  }
})

export default InstagramList
