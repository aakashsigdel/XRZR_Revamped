'use strict'

import React, {
  StyleSheet,
  View
} from 'react-native'

const ProgressBar = (props) => {
  let completed = {flex: props.completed}
  let remaining = {flex: props.remaining}
  return (
    <View style={styles.container}>
      <View style={[styles.completed, completed]}></View>
      <View style={[styles.remaining, remaining]}></View>
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
    height: 5,
    backgroundColor: 'white'
  },
  remaining: {
  }
})

export default ProgressBar
