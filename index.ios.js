'use strict'

import React, {
  AppRegistry,
  StatusBarIOS,
} from 'react-native';
import App from './src/App'
import Player from './src/containers/Player'

StatusBarIOS.setHidden(true)

AppRegistry.registerComponent('XRZR', () => App)
