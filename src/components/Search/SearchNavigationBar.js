import React, {
  View,
  PropTypes,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Navigation from '../Navigation/Navigation'

const SearchNavigationBar = (props) => {
  let left = {
    custom: <TouchableOpacity onPress={props.onClosePressed}>
      <Icon
        color='rgba(255,255,255, 0.5)'
        name='close'
        size={35}
      />

    </TouchableOpacity>
  }
  let right = {
    custom: (
      <View style={styles.searchContainer}>
        <TextInput
          autoCorrect={false}
          placeholder='Search'
          placeholderTextColor='rgba(255,255,255,0.5)'
          style={[styles.searcher, styles.textInput]}
        />
        <Icon
          color='rgba(255,255,255, 0.5)'
          name='search'
          size={20}
          style={[styles.searcher, styles.icon]}
        />
      </View>
    )
  }
  return (
    <Navigation
      left={left}
      mid={right}
      right={{}}
    />
  )
}

SearchNavigationBar.propTypes = {
  onClosePressed: PropTypes.func
}
const styles = StyleSheet.create({
  container: {},
  searcher: {
    height: 28,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  textInput: {
    width: 290,
    padding: 5,
    paddingLeft: 10,

    fontSize: 13,
    fontFamily: 'Avenir-Book'
  },
  icon: {
    padding: 5
  }
})

export default SearchNavigationBar
