'use strict'

import React, {
  ActivityIndicatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native'

const Loader = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicatorIOS
        size='large'
      />
      <Text style={styles.text}>{props.loadingText}</Text>
    </View>
  )
}

Loader.defaultProps = {
  loadingText: 'Loading...'
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 30,
    color: 'white',
    fontSize: 16
  }
})

export default Loader
