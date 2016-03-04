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
      <View style={styles.left}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={props.handleCancelPress}
        >
          <Icon name='close'
            size={40}
            backgroundColor='transparent'
            color='rgba(255,255,255,0.6)'
          />
        </TouchableOpacity>
        <Text style={styles.topBarText}>
          {'CANCEL'}
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.handleSavePress}
      >
        <Text style={styles.saveText}>
          {'SAVE'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: HEADERBAR_HEIGHT,
    backgroundColor: '#1D2022',
    justifyContent: 'space-between',
    paddingRight: 10
  },
  left: {
    flexDirection: 'row',
  },
  topBarText: {
    alignSelf: 'center',
    fontSize: 11,
    fontFamily: 'SFCompactText-Semibold',
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.5)',
    marginLeft: 5
  },
  saveText: {
    color: 'white',
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    fontWeight: '700'
  }
})

export default Navigation
