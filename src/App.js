'use strict'

require('es6-promise').polyfill()
import React from 'react-native'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import thunkMiddleware from 'redux-thunk'

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

persistStore(store, {whitelist: 'category', storage: React.AsyncStorage})

const App = () => {
  return (
    <Provider store={store}>
      <XRZRApp />
    </Provider>
  )
}

export default App
