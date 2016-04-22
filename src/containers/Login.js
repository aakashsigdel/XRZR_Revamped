'use strict'

import React, { Component } from 'react-native'
import { connect } from 'react-redux'
import { postWorkout } from '../redux_x/actions/workoutActionCreators'
import Loader from '../components/Common/Loader.ios.js'
import { loginSuccess } from '../redux_x/actions/loginActionCreators'
import { getAccessTokenFromAsyncStorage } from '../utilities/utility'

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

  componentDidMount () {
    getAccessTokenFromAsyncStorage()
    .then(response => {
      if(JSON.parse(response).access_token) {
        this.props.dispatch(loginSuccess(JSON.parse(response)))
        this.navigator.replace({name: 'browse'})
      }
    })
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
