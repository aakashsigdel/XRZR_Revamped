'use strict'

import React, {
  StyleSheet,
  View
} from 'react-native'

const ProgressBar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.completed}></View>
      <View style={styles.remaining}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 5,
    backgroundColor: '#4F515C'
  },
  completed: {
    width: 250,
    height: 5,
    backgroundColor: 'white'
  }
})

export default ProgressBar
