import React, {
  View,
  StyleSheet,
  TouchableOpacity,
  PropTypes,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Navigation from '../Navigation/Navigation'

const NavBar = (props) => {
  const title = (props.title || props.title.length >= 35)
    ? props.title.slice(0, 33) + '...'
    : props.title

  const left = (
    <View
      style={styles.leftContainer}
    >
      <TouchableOpacity
        onPress={props.onCloseButton}
        style={styles.closeButton}
      >
        <Icon
          color='rgba(255,255,255,.5)'
          name='ios-close-empty'
          size={50}
        />
      </TouchableOpacity>
      <Text
        style={styles.midText}
      >
        {title.toUpperCase()}
      </Text>
    </View>
  )

  const touchHandler = props.editOnProgress ? props.onDone : props.onEdit
  const right = (
    <TouchableOpacity
      onPress={touchHandler}
      style={styles.rightContainer}
    >
      <Text style={styles.rightText}>{props.editOnProgress ? 'DONE' : 'EDIT'}</Text>
    </TouchableOpacity>
  )
  return (
    <Navigation
      left={{custom: left}}
      mid={{}}
      right={{custom: right}}
    />
  )
}

NavBar.propTypes = {
  onCloseButton: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}
const styles = StyleSheet.create({
  container: {},
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  closeButton: {
    marginLeft: 12.5,
    marginBottom: 35,
    height: 10
  },
  midText: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'SFCompactDisplay-Semibold',
    fontSize: 11,
    paddingTop: 5,
    paddingLeft: 10
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginBottom: 11
  },
  rightText: {
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'SFCompactDisplay-Semibold',
    fontSize: 15
  }
})

export default NavBar
