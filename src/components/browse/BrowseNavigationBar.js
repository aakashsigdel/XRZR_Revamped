import React, { View, PropTypes, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Navigation from '../Navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const BrowseNavigationBar = (props) => {
  let leftIcon = (
    <View style={styles.roundIcon}>
      <Icon
        color='rgb(5,220,186)'
        name='person'
        size={25}
      />
    </View>
  )
  let rightIcon = (
    <TouchableOpacity onPress={props.onSearch} >
      <Icon
        backgroundColor='transparent'
        color='rgb(5,220,186)'
        name='ios-search-strong'
        size={25}
        style={{marginBottom: 10}}
      />
    </TouchableOpacity>
  )

  let browse = (
    <Text style={(props.selectedTab === 'browse') ? [styles.midText, styles.selected] : [styles.midText]}>
      Workouts
    </Text>
  )
  let browseStyle = {backgroundColor: 'transparent'}
  if (props.selectedTab === 'browse') {
    browseStyle = {backgroundColor: 'rgb(5,220,186)'}
  }

  let favStyle = {backgroundColor: 'transparent'}
  if (props.selectedTab === 'favourite') {
    favStyle = {backgroundColor: 'rgb(5,220,186)'}
  }

  let favourite = (
    <Text style={(props.selectedTab === 'favourite') ? [styles.midText, styles.selected] : [styles.midText]}>
      Favourite
    </Text>
  )

  let midIcon = (
    <View style={styles.midContainer}>
      <TouchableOpacity onPress={props.onBrowseTabSelect} style={[styles.touchLeft, browseStyle]}>
        {browse}
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onFavouriteTabSelect} style={[styles.touchRight, favStyle]}>
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

BrowseNavigationBar.propTypes = {
  onBrowseTabSelect: PropTypes.func.isRequired,
  onFavouriteTabSelect: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  selectedTab: PropTypes.string
}

const styles = StyleSheet.create({
  container: {},
  roundIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'rgb(5,220,186)',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    overflow: 'hidden',
    marginBottom: 10,
    marginLeft: 5
  },
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
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 1
  },
  touchRight: {
    borderColor: 'rgb(5,220,186)',
    borderWidth: 2,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 1
  }
})

export default BrowseNavigationBar
