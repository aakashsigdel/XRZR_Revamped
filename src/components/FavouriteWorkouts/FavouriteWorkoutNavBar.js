import React, { Image, View, StyleSheet, Text, TouchableOpacity, PropTypes } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Navigation from '../Navigation/Navigation'

const FavouriteWorkoutNavBar = (props) => {
  let leftIcon = (
    <TouchableOpacity onPress={props.onBackButton}>
      <Image
        source={require('../../../assets/images/back.png')}
        style={styles.backButton}
      />
    </TouchableOpacity>
  )

  let editIcon = (
    <TouchableOpacity
      onPress={props.onEditButton}
      style={styles.rightNav}
    >
      <Text style={styles.edit}>EDIT </Text>
    </TouchableOpacity>
  )

  let doneIcon = (
    <TouchableOpacity
      onPress={props.onDoneButton}
      style={styles.rightNav}
    >
      <Text style={styles.edit}>DONE </Text>
    </TouchableOpacity>
  )

  let rightIcon = (
    <TouchableOpacity onPress={props.onSearch} >
      <Icon
        backgroundColor='transparent'
        color='rgb(213,10,177)'
        name='ios-search-strong'
        size={25}
        style={{marginBottom: 10}}
      />
    </TouchableOpacity>
  )

  let browse = (
    <Text style={styles.midText}>
      Workouts
    </Text>
  )
  let browseStyle = {backgroundColor: 'transparent'}

  let favStyle = {backgroundColor: 'rgb(213, 10, 177)'}
  let favourite = (
    <Text style={[styles.midText, styles.selected]}>
      Favourite
    </Text>
  )
  let midIcon = (
    <View style={styles.midContainer}>
      <TouchableOpacity
        onPress={props.onBrowseTabSelect}
        style={[styles.touchLeft, browseStyle]}
      >
        {browse}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onFavouriteTabSelect}
        style={[styles.touchRight, favStyle]}
      >
        {favourite}
      </TouchableOpacity>
    </View>
  )

  return (
    <Navigation
      backgroundColor='transparent'
      left={{custom: leftIcon}}
      mid={{custom: midIcon}}
      right={{custom: rightIcon}}
    />
  )
}

FavouriteWorkoutNavBar.propTypes = {}
const styles = StyleSheet.create({
  container: {},
  midContainer: {
    flexDirection: 'row',
    marginBottom: 8.5
  },
  midText: {
    color: 'rgb(213, 10, 177)',
    padding: 2,
    paddingRight: 10,
    paddingLeft: 15,
    fontFamily: 'SFUIText-Regular'
  },
  selected: {
    color: 'white'

  },
  touchLeft: {
    borderColor: 'rgb(213, 10, 177)',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 1
  },
  touchRight: {
    borderColor: 'rgb(213, 10, 177)',
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 1
  },
  edit: {
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 10,

    fontSize: 13
  },
  rightNav: {
    width: 40
  },
  backButton: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginBottom: 10
  }
})

export default FavouriteWorkoutNavBar
