import React, { View, StyleSheet, Text, TouchableOpacity, PropTypes } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Navigation from '../Navigation/Navigation'

const FavouriteNavigationBar = (props) => {
  let leftIcon = (
    <TouchableOpacity>
      <Icon
        backgroundColor='transparent'
        color='rgba(255,255,255,0.5)'
        name='android-arrow-back'
        size={35}
      />
    </TouchableOpacity>
  )

  let rightIcon = (
    <TouchableOpacity>
      <Text style={styles.edit}> EDIT </Text>
    </TouchableOpacity>
  )

  let browse = (
    <Text style={styles.midText}>
      Workouts
    </Text>
  )
  let browseStyle = {backgroundColor: 'transparent'}

  let favStyle = {backgroundColor: 'rgb(5,220,186)'}
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

FavouriteNavigationBar.propTypes = {}
const styles = StyleSheet.create({
  container: {},
  midContainer: {
    flexDirection: 'row',
    marginBottom: 8.5
  },
  midText: {
    color: 'rgb(5,220,186)',
    padding: 2,
    paddingRight: 10,
    paddingLeft: 15,
    fontFamily: 'SFUIText-Regular'
  },
  selected: {
    color: 'white'

  },
  touchLeft: {
    borderColor: 'rgb(5,220,186)',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 1
  },
  touchRight: {
    borderColor: 'rgb(5,220,186)',
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    padding: 1
  },
  edit: {
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 10,

    fontSize: 13
  }
})

export default FavouriteNavigationBar
