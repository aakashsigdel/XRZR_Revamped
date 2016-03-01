'use strict'

import React, {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { HEADERBAR_HEIGHT } from '../../constants/appConstants'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Navigation = (props) => {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity
        onPress={props.navigator.pop}
      >
        <Icon name='close'
          size={40}
          backgroundColor='transparent'
          color='rgba(255,255,255,0.6)'
        />
      </TouchableOpacity>
      <Text style={styles.topBarText}>
        NEW WORKOUT
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: HEADERBAR_HEIGHT,
    height: 80,
    backgroundColor: '#1D2022'
  },
  topBarText: {
    alignSelf: 'center',
    fontSize: 11,
    fontFamily: 'SFCompactText-Semibold',
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.5)',
    marginLeft: 5
  }
})

export default Navigation
