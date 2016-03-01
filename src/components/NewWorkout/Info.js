'use strict'

import React, {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Info = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {'New workouts are private by default. Meaning only'}
        </Text>
        <Text style={styles.text}>
          {'you can see/use them. Click publish when satisfied.'}
        </Text>
      </View>
      <Icon name='info-outline' color='rgba(255, 255, 255, 0.5)' size={25} />
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12.5
  },
  textContainer: {
    backgroundColor: 'black',
    flex: 1
  },
  text: {
    fontSize: 12,
    fontFamily: 'SFCompactText-Semibold',
    color: 'rgba(255, 255, 255, 0.5)'
  }
})

export default Info
