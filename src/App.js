'use strict'

import React from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import XRZRReducer from './redux_x/reducers'
import XRZRApp from './containers/XRZRApp'

const store = createStore(XRZRReducer)

const App = () => {
  return (
    <Provider store={store}>
      <XRZRApp />
    </Provider>
  )
}

export default App
