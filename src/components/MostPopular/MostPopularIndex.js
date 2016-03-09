'use strict'

import React, {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import FIcon from 'react-native-vector-icons/FontAwesome'

import Navigation from '../Navigation/Navigation'
import Listing from './Listing'

const onPressSearch = (navigator) => {
  navigator.push({
    name: 'action',
    actionElements: [
      {name: 'UNPUBLISH WORKOUT', icon: <Icon name='locked' color='white' size={11} />, border: true},
      {name: 'EDIT WORKOUT', icon: <FIcon name='history' color='white' size={20} />}
    ]
  })
}

const MostPopularIndex = (props) => {
  const navLeft = {
    custom: (
      <TouchableOpacity
        onPress={() => props.navigator.pop()}
      >
        <Image
          source={require('../../../assets/images/back.png')}
          style={styles.backButton}
        />
      </TouchableOpacity>
    )
  }

  const navRight = {
    custom: (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.handlePressOnSearch}
        style={{ marginBottom: 5 }}
      >
        <Icon
          name='ios-search-strong'
          size={25}
          color='white'
          backgroundColor='transparent'
        />
      </TouchableOpacity>
    )
  }

  return (
    <View
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
    </View>
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
    fontSize: 31
  },
  backButton: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginBottom: 10
  }
})

export default MostPopularIndex
