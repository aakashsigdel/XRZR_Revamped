'use strict'

import React from 'react-native'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'

import devTools from 'remote-redux-devtools'

import XRZRReducer from './redux_x/reducers'
import XRZRApp from './containers/XRZRApp'

const store = createStore(
  XRZRReducer,
  compose(devTools())
)

const App = () => {
  return (
    <Provider store={store}>
      <XRZRApp />
    </Provider>
  )
}

export default App
