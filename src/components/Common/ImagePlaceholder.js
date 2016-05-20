import React, {Component} from 'react'
import {Image} from 'react-native'

export default class ImageWithPlaceHolder extends Component {
  render () {
    let placeHolderImage = require('../../../node_modules/@remobile/react-native-splashscreen/ios/RCTSplashScreen/SplashScreenResource/splash.png')
    return (
      <Image
        {...this.props}
        defaultSource={placeHolderImage}
      >
        {this.props.children}
      </Image>
  )
  }
}
