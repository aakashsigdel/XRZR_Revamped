'use strict'

import React, {
  ScrollView,
  StyleSheet,
  Text
} from 'react-native'
import { VIEWPORT } from '../../constants/appConstants'

const Description = (props) => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      style={styles.container}
    >
      <Text style={styles.text}>
        {
          'I don’t train. live in bali. love sit amet, consectetur adipiscing' +
          'elit. Donec nec viverra arcu. Vestibulum in dolor eget justo' +
          'ultricies porta nec nec eros. Donec id diam sapien. Nam eu tincidunt nibh.'
        }
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  scrollView: {
    flex: 1,
    padding: 10,
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
