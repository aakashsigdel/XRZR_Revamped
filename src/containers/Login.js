'use strict'

import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import { FBSDKLoginManager } from 'react-native-fbsdklogin'
import { postWorkout } from '../redux_x/actions/workoutActionCreators'
import Loader from '../components/Common/Loader.ios.js'

import LoginIndex from '../components/Login/LoginIndex'
import {
  clearError,
  login
} from '../redux_x/actions/loginActionCreators'

class Login extends Component {
  constructor () {
    super ()
    this.state = {
      isLoading: false
    }
  }

  onButtonPress () {
    this.props.dispatch(login())
    this.setState({ isLoading: true })
  }

  componentDidUpdate () {
    if (this.props.access_token) {
      this._navigateToBrowse.call(this)
    }  else if (this.props.error) {
      alert('LOGIN ERROR: Please try again!')
      this.props.dispatch(clearError())
    }
  }

  _navigateToBrowse () {
    this.props.navigator.replace({name: 'browse'})
  }

  render () {
    if (this.state.isLoading) {
      return <Loader
        loadingText='Loggin in...'
      />
    }
    return (
      <LoginIndex
        onButtonPress={() => this.onButtonPress()}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return state.login
}

export default connect(
  mapStateToProps
)(Login)
