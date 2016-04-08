'use strict'

import React, {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

const Button = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onSaveButton}
      style={styles.save}
    >
      <Text style={styles.buttonText}>
        SAVE
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  save: {
    backgroundColor: 'rgb(213, 10, 177)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 13
  }
})

export default Button
