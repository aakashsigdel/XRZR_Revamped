'use strict'

import React, {
  StyleSheet,
  Text,
  View
} from 'react-native'

const Info = (props) => {
  return (
    <View
      style={styles.button}
    >
      <Text style={styles.text}>
        {'UPLOADING. PLEASE WAIT'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#C800A1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    fontWeight: '700',
    color: 'white'
  }
})

export default Info
