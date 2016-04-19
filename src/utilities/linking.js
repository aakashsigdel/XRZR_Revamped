import React, {Linking} from 'react-native'

export const shareText = (text) => {
  console.log("hello hello")
  Linking.canOpenURL(text)
    .then((supported) => {
      if (!supported) {
        console.log('Can\'t handle url: ' + text)
      } else {
        console.log("Yes I can ", text)
        return Linking.openURL(text)
      }
    })
    .catch((err) => console.error('An error occurred', err))
}
