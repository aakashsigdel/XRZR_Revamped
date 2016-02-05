'use strict'

import React, { Navigator } from 'react-native'

import Login from '../components/Login/Login'

const XRZRApp = props => {
  return (
    <Navigator
      initialRoute={{name: 'login'}}
      renderScene={_renderScene}
    />
  )
}

const _renderScene = (route, navigator) => {
  switch (route.name) {
    case 'login':
      return <Login
        navigator={navigator}
      />
    default:
      return <Login
        navigator={ navigator }
      />
  }
}

export default XRZRApp
