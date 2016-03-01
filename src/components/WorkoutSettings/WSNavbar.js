import React, {
  View,
  StyleSheet,
  TouchableOpacity,
  PropTypes,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Navigation from '../Navigation/Navigation'

const WSNavbar = (props) => {
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

  const right = (
    <View
      style={styles.rightContainer}
    >
      <TouchableOpacity
        style={styles.lockContainer}
      >
        <Icon
          color='rgba(255,255,255,0.5)'
          name='locked'
          size={10}
          style={styles.lockedIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          color='rgba(255,255,255,0.5)'
          name='android-delete'
          size={25}
        />
      </TouchableOpacity>
    </View>
  )
  return (
    <Navigation
      left={{custom: left}}
      mid={{}}
      right={{custom: right}}
    />
  )
}

WSNavbar.propTypes = {
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
    marginBottom: 7
  },
  lockContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  }
})

export default WSNavbar
