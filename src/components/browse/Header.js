import React, { View, StyleSheet } from 'react-native'
import Carousel from 'react-native-looped-carousel'

import { VIEWPORT } from '../../constants/appConstants'
import HeaderElement from './HeaderElement'

const Header = (props) => {
  console.log(props.featured)

  let featuredElements = props.featured.map(
    (item, index) => <HeaderElement workout={item} key={index}/>
  )

  return (
    <Carousel delay={ 3000 } style={styles.container}>
      { featuredElements }
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