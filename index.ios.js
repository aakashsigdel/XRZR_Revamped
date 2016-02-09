'use strict'

import React, {
  AppRegistry,
  StatusBarIOS,
} from 'react-native';
import App from './src/App'

StatusBarIOS.setHidden(true)

AppRegistry.registerComponent('XRZR', () => App)
