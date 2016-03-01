'use strict'

import React, {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import Switch from 'react-native-material-switch'

const Settings = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.soundContainer}>
        <Text style={styles.text}>
          SOUND
        </Text>
        <Switch
          buttonRadius={10}
          inactiveButtonColor='#B0B0B4'
          inactiveButtonPressedColor='#B0B0B4'
          activeButtonColor='#1DD7AB'
          activeButtonPressedColor='#1DD7AB'
          activeBackgroundColor='#197461'
          switchHeight={15}
          switchWidth={33}
        />
      </View>
      <TouchableOpacity style={styles.instagramContainer}>
        <Text style={styles.text}>
          INSTAGRAM
        </Text>
        <Text style={styles.text}>
          CONNECT
        </Text>
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={styles.text}>
          DESCRIPTION
        </Text>
        <TextInput
          multiline
          placeholder={'A few words about the exercises or guidelines.'}
          placeholderTextColor='rgba(255, 255, 255, 0.5)'
          style={styles.textInput}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  soundContainer: {
    // flex: 1.38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 58,
    paddingLeft: 15,
    paddingRight: 20,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.5)'
  },
  instagramContainer: {
    // flex: 1.38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 20,
    height: 58,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.5)'

  },
  description: {
    flex: 7.24,
    paddingLeft: 15,
    paddingTop: 20,
    paddingRight: 20
  },
  textInput: {
    height: 115,
    paddingTop: 5,
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.2)'
  },
  text: {
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    fontWeight: '800',
    color: 'rgba(255, 255, 255, 0.5)'
  }
})

export default Settings
