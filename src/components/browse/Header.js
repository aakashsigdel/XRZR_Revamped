import React, { View, StyleSheet } from 'react-native'
import Carousel from 'react-native-looped-carousel'

import { VIEWPORT } from '../../constants/appConstants'
import HeaderElement from './HeaderElement'

const Header = (props) => {
  return (
    <Carousel delay={ 3000 } style={styles.container}>
      <HeaderElement headerImage="http://i.imgur.com/ilAQEm3.gif"/>
      <HeaderElement headerImage="http://i.imgur.com/2EBJ4ar.jpg" />
      <HeaderElement headerImage="http://i.imgur.com/CrkgD5B.jpg" />
    </Carousel>
  )
}

const styles = StyleSheet.create({
  container: {
    width:VIEWPORT.width,
    height:210
  }
})

export default Header