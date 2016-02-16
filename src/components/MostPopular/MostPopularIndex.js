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
      <TouchableOpacity
        onPress={_=>{ props.navigator.pop() }}
      >
        <Icon
          name='android-arrow-back'
          size={35}
          color='white'
          backgroundColor='transparent'
        />
      </TouchableOpacity>
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
        size={25}
        color='white'
        backgroundColor='transparent'
        style={{ marginBottom: 5 }}
      />
    )
  }
  return (
    <Image
      source={require("../../../assets/images/background.png")}
      style={styles.container}
    >
      <Image
        source={{uri: props.mostPopularWorkout[0].image_16x9}}
        style={styles.coverImage}
      >
        <Text style={styles.text}>Most</Text>
        <Text style={styles.text}>popular</Text>
      </Image>
      <View style={styles.listingContainer}>
        <Listing
          mostPopularWorkout={props.mostPopularWorkout}
          loadWorkout={props.loadWorkout}
        />
      </View>
      <Navigation
        left={navLeft}
        mid={{}}
        right={navRight}
        position='absolute'
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
  },
  listingContainer: {
    flex: 13 
  },
  coverImage: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontFamily: 'SFUIText-Light',
    fontSize: 31,
  }
})

export default MostPopularIndex
