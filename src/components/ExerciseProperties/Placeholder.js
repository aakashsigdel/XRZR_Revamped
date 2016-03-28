'use strict'
import React, {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const renderPlaceholder = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onChooseVideo}
      style={[styles.container, {height: props.height}]}
    >
      <Icon name='social-youtube' color='white' size={40} />
      <Text style={styles.text}>
        {'select video exercise to'}
      </Text>
      <Text style={styles.text}>
        {'upload or record a new one'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#343637',
    justifyContent: 'center',
    paddingTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 11,
    fontFamily: 'Avenir-Book'
  }
})

export default renderPlaceholder
