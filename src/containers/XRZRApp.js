'use strict'

import React, { Navigator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as workoutActionCreators from '../redux_x/actions/workoutActionCreators'
import * as exerciseActionCreators from '../redux_x/actions/exerciseActionCreators'
import * as categoryActionCreators from '../redux_x/actions/categoryActionCreators'

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

const _mapDispatchToProps = (dispatch) => {
  const actions = {}
  actions.workoutActions = bindActionCreators(workoutActionCreators, dispatch)
  actions.exerciseActions = bindActionCreators(exerciseActionCreators, dispatch)
  actions.categoryActions = bindActionCreators(categoryActionCreators, dispatch)

  return actions
}

export default connect(
  state => { state },
  _mapDispatchToProps
)(XRZRApp)
