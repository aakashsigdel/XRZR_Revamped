'use strict'

import React, {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Navigation from '../Navigation/Navigation'
import Listing from './Listing'

const MostPopularIndex = props => {
  const navLeft = {
    custom: (
      <Icon
        name='android-arrow-back'
        size={40}
        color='white'
        backgroundColor='transparent'
      />
    )
  }
  const navMid = {
    text: 'MOST POPULAR',
    style: {
      color: 'white',
      marginBottom: 15
    }
  }
  const navRight = {
    custom: (
      <Icon
        name='ios-search-strong'
        size={40}
        color='white'
        backgroundColor='transparent'
      />
    )
  }
  return (
    <Image
      source={require("../../../assets/images/background.png")}
      style={styles.container}
    >
      <Navigation
        left={navLeft}
        mid={navMid}
        right={navRight}
      />
      <Listing
        mostPopularWorkout={props.mostPopularWorkout}
      />
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    paddingTop: 5,
    paddingLeft: 15
  }
})

export default MostPopularIndex
