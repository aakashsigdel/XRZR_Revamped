'use strict'

import React, { Navigator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as workoutActionCreators from '../redux_x/actions/workoutActionCreators'
import * as exerciseActionCreators from '../redux_x/actions/exerciseActionCreators'
import * as categoryActionCreators from '../redux_x/actions/categoryActionCreators'

import Login from '../components/Login/Login'
import Player from './Player'
import Browse from './Browse'
import MostPopular from './MostPopular'
import Category from './Category'
import WorkoutIntro from './WorkoutIntro'
import Search from './Search'

const XRZRApp = ({ state, actions, store }) => {
  return (
    <Navigator
      initialRoute={{name: 'browse'}}
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
    case 'player':
      return <Player navigator={navigator} />
    case 'browse':
      return <Browse navigator={navigator} />
    case 'mostPopular':
      return <MostPopular
        navigator={navigator}
      />
    case 'category':
      return <Category
        navigator={ navigator }
      />
    case 'workoutIntro':
      return <WorkoutIntro navigator={navigator} />
    case 'search':
      return <Search navigator={navigator} />
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

  return { actions }
}

export default connect(
  state => ({ state }),
  _mapDispatchToProps
)(XRZRApp)
