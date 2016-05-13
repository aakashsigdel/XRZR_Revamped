'use strict'

require('es6-promise').polyfill()
import React from 'react-native'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import thunkMiddleware from 'redux-thunk'

import Mixpanel from 'react-native-mixpanel'

import {Crashlytics} from 'react-native-fabric'

import devTools from 'remote-redux-devtools'

import XRZRReducer from './redux_x/reducers'
import XRZRApp from './containers/XRZRApp'

const store = createStore(
  XRZRReducer,
  compose(
    applyMiddleware(
      thunkMiddleware
    ),
    devTools({name: 'aakash'})
  ),
  autoRehydrate()
)

persistStore(
  store,
  {
    whitelist: [
      'category',
      'trending',
      'workout',
      'instructor',
      'featuredWorkout'
    ],
    storage: React.AsyncStorage
  }
)

//Crashlytics.crash()

// changing project token here will not change anything go to appDeligate.m
const MIXPANEL_PROJECT_TOKEN = '0b2cb44f917f7ae7305b2d1723ec52a9'
Mixpanel.sharedInstanceWithToken(MIXPANEL_PROJECT_TOKEN)

const App = () => {
  return (
    <Provider store={store}>
      <XRZRApp />
    </Provider>
  )
}

export default App
