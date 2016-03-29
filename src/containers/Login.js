'use strict'

import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import { FBSDKLoginManager } from 'react-native-fbsdklogin'

import LoginIndex from '../components/Login/LoginIndex'
import {
  clearError,
  login
} from '../redux_x/actions/loginActionCreators'

class Login extends Component {
  onButtonPress () {
    this.props.dispatch(login())
  }

  componentDidUpdate () {
    if (this.props.access_token) {
      this._navigateToBrowse()
    }  else if (this.props.error) {
      alert('LOGIN ERROR: Please try again!')
      this.props.dispatch(clearError())
    }
  }

  _navigateToBrowse () {
    this.props.navigator.push({name: 'browse'})
  }

  render () {
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
