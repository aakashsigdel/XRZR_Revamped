import React, { View, StyleSheet } from 'react-native'
import Navigation from '../Navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const BrowseNavigationBar = (props) => {
  let leftIcon = (
    <View style={styles.roundIcon}>
      <Icon name="person" size={20} color="white" />
    </View>
  )
  let rightIcon = (
    <View >
      <Icon name="ios-search" size={25} color="white" />
    </View>
  )
  return (
    <Navigation
      left={{custom: leftIcon}}
      mid={{text: "BROWSE", style:{color: 'white'}}}
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
    overflow: 'hidden'
  }
})

export default BrowseNavigationBar