'use strict'

import React, {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'

import GhostButton from '../Common/GhostButton'

const LoginIndex = (props) => {
  return (
    <Image
      source={{
        uri: 'https://aakashsigdel.github.io/XRZR_Files/others/loginImage.png'
      }}
      style={styles.container}
    >
      <Text style={styles.text}>
        WORKOUTS
      </Text>
      <Text style={styles.text}>
        FOR EVERYONE
      </Text>
      <View style={styles.buttonContainer}>
        <GhostButton
          backgroundColor='rgba(213, 10, 177, 0.8)'
          text={"LOGIN WITH FACEBOOK"}
          onButtonPress={props.onButtonPress}
        />
      </View>
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 24,
    fontFamily: 'SFUIDisplay-Regular'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 18,
    left: 0,
    right: 0,
    alignItems: 'center'
  }
})

export default LoginIndex

