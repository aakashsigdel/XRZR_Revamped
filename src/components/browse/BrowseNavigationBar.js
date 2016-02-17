import React, { View, StyleSheet, TouchableOpacity } from 'react-native'
import Navigation from '../Navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const BrowseNavigationBar = (props) => {
  let leftIcon = (
    <View style={styles.roundIcon}>
      <Icon name="person" size={25}
            color="white"
      />
    </View>
  )
  let rightIcon = (
    <TouchableOpacity onPress={props.onSearch} >
      <Icon name="ios-search-strong"
            size={25} color="white"
            backgroundColor="transparent"
            style={{marginBottom: 10}}
      />
    </TouchableOpacity>
  )
  return (
    <Navigation
      left={{custom: leftIcon}}
      mid={{text: "BROWSE", style:{color: 'white', marginBottom: 15}}}
      right={{custom: rightIcon}}
      backgroundColor="transparent"
    />
  )
}

const styles = StyleSheet.create({
  container: {},
  roundIcon: {
    width:30,
    height: 30,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    overflow: 'hidden',
    marginBottom: 10,
    marginLeft: 5
  }
})

export default BrowseNavigationBar
