import React, {
  View,
  PropTypes,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Navigation from '../Navigation/Navigation'

const SearchNavigationBar = (props) => {
  let left = {
    custom: (
      <TouchableOpacity
        onPress={props.onClosePressed}
        style={styles.closeButton}
      >
        <Icon
          color='rgba(255,255,255,0.5)'
          name='ios-close-empty'
          size={53}
        />
      </TouchableOpacity>
    )
  }
  let right = {
    custom: (
      <View style={styles.searchContainer}>
        <TextInput
          autoCorrect={false}
          placeholder='Search'
          placeholderTextColor='rgba(255,255,255,0.5)'
          style={[styles.searcher, styles.textInput]}
          value={props.searchText}
          onChangeText={props.onSearchInput}

          onSubmitEditing={props.onSearchButton}
          returnKeyType='search'                  // IOS ONlY
          selectTextOnFocus
        />
        <TouchableOpacity
          onPress={props.onSearchButton}
        >
          <Icon
            color='rgba(255,255,255, 0.5)'
            name='ios-search'
            size={17}
            style={[styles.searcher, styles.icon]}
          />
        </TouchableOpacity>
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
  closeButton: {
    marginBottom: -13
  },
  searcher: {
    height: 28,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  textInput: {
    width: 290,
    padding: 5,
    paddingLeft: 10,

    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    fontFamily: 'Avenir-Book'
  },
  icon: {
    padding: 5
  }
})

export default SearchNavigationBar
