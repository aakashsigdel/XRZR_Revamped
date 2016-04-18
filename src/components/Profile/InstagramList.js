'use strict'

import React, {
  Image,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { VIEWPORT } from '../../constants/appConstants'

const _renderPhotos = (instagramPhotos, isFetchingInstagram) => {
  if (instagramPhotos.length === 0) {
    return <Text style={{color: 'grey'}}>No Instagram Photos To Display</Text>
  }
  return instagramPhotos.map((photo, index) => {
    return (
      <Image
        key={index}
        source={{uri: photo.images.low_resolution.url}}
        style={styles.image}
      />
    )
  })
}

const InstagramList = (props) => {
  return (
    <View style={styles.container}>
      {_renderPhotos(props.instagramPhotos)}
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
