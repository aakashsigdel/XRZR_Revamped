'use strict'

import React, {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { VIEWPORT } from '../../constants/appConstants'

const Description = (props) => {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>
        { props.user.description }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  text: {
    fontFamily: 'SFUIText-Regular',
    fontSize: 13 * VIEWPORT.height / 667,
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.8
  }
})

export default Description
