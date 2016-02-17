import React, {
  View,
  StyleSheet,
  TouchableOpacity, } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import Navigation from '../Navigation/Navigation'

const CategoryNavigationBar = (props) =>{
  const navLeft = {
    custom: (
      <TouchableOpacity
        onPress={ props.onBackButton }
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
  const navMid = {}
  const navRight = {
    custom: (
      <TouchableOpacity onPress={props.onSearch}>
        <Icon
          name='ios-search-strong'
          size={25}
          color='white'
          backgroundColor='transparent'
          style={{ marginBottom: 5 }}
        />
      </TouchableOpacity>
    )
  }

  return (
    <Navigation left={ navLeft }
                mid={ navMid }
                right={ navRight }
                position="absolute"
    />
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default CategoryNavigationBar