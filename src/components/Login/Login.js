'use strict'

import React, {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native'

import GhostButton from '../GhostButton'

const Login = props => {
  return (
    <Image
      source={{
        uri: 'https://lh3.googleusercontent.com/' +
        'qmFzxL9Zx_xxlFwmDNENfy6xn9B3Fy6NjJYzHVAuGJE=w376-h667-no'
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
          text={"LOGIN WITH FACEBOOK"}
          onButtonPress={_=> console.log('Pressed Login with facebook')}
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

export default Login

