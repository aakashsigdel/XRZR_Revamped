import React, { View, PropTypes, StyleSheet } from 'react-native'
import Carousel from 'react-native-looped-carousel'

import { VIEWPORT } from '../../constants/appConstants'
import HeaderElement from './HeaderElement'
import LoadingSign from '../Common/LoadingSign'

const Header = (props) => {

  if (props.isFeaturedLoading) {
    return (
      <View style={styles.container}>
        <LoadingSign/>
      </View>
    )
  }

  let featuredElements = props.featured.map(
    (item, index) => (
      <HeaderElement
        key={index}
        onWorkoutSelect={props.onWorkoutSelect}
        workout={item}
      />
    )
  )

  return (
    <Carousel
      delay={3000}
      style={styles.container}
    >
      {featuredElements}
    </Carousel>
  )
}

Header.propTypes = {
  featured: PropTypes.array,
  onWorkoutSelect: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    width: VIEWPORT.width,
    height: 210
  }
})

export default Header
