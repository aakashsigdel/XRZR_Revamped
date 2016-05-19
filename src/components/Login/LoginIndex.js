'use strict'

import React, {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { VIEWPORT } from '../../constants/appConstants'
import GhostButton from '../Common/GhostButton'

const LoginIndex = (props) => {
  return (
    <Image
      source={require('../../../node_modules/@remobile/react-native-splashscreen/ios/RCTSplashScreen/SplashScreenResource/splash.png')}
      style={styles.container}
    >
      <Text style={[styles.text, styles.upperText]}>
        UNLIMITED
      </Text>
      <Text style={styles.text}>
        WORKOUTS
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
    width: VIEWPORT.width,
    height: VIEWPORT.height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  upperText: {
    paddingTop: 35
  },
  text: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 30,
    fontFamily: 'Roboto-Bold'
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

