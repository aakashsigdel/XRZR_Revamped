'use strict'

import React, {
  Component,
  View
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileSettingsIndex from '../components/ProfileSettings/ProfileSettingsIndex'
import { updateUser } from '../redux_x/actions/loginActionCreators'
import RNInstagramOAuth from 'react-native-instagram-oauth'
import { INSTAGRAM_DETAILS } from '../constants/appConstants'

class ProfileSettings extends Component {
  constructor () {
    super()
    this.state = {
      sound: false,
      description: '',
    }
    this.instagramAccessToken = null
  }

  setSound (sound) {
    this.setState({ sound })
  }

  setDescription (description) {
    this.setState({ description })
  }

  onSaveButton () {
    const userData = {
      sound: this.state.sound,
      description: this.state.description,
      instagram_token: this.instagramAccessToken
    }
    this.props.updateUser(userData)
  }

  onInstagramConnect () {
    RNInstagramOAuth(
      INSTAGRAM_DETAILS.clientId,
      INSTAGRAM_DETAILS.redirectURL,
      this._instagramLoginCallback.bind(this)
    )
  }

  _instagramLoginCallback (error, access_token) {
    if (error) {
      console.warn(error)
      return
    }

    if (access_token !== undefined) {
      console.log(access_token, 'instagram access_token')
      this.instagramAccessToken = access_token
    }
  }

  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <ProfileSettingsIndex
          user={this.props.user[this.props.userId]}
          navigator={this.props.navigator}
          setSound={this.setSound.bind(this)}
          setDescription={this.setDescription.bind(this)}
          onSaveButton={this.onSaveButton.bind(this)}
          onInstagramConnect={this.onInstagramConnect.bind(this)}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    workouts: state.workout.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: bindActionCreators(updateUser, dispatch)
  }
}

export default connect(
  (state) => mapStateToProps(state),
  mapDispatchToProps
)(ProfileSettings)
