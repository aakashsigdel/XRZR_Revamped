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
import StatusMessage from '../components/Common/StatusMessage'

class ProfileSettings extends Component {
  constructor (props) {
    super(props)
    console.log(props.user[props.userId].description, 'description')
    this.state = {
      sound: false,
      description: props.user[props.userId].description,
      showUpdateSuccessModal: false,
      instagramAccessToken: props.user[props.userId].instagramToken
    }
  }

  componentDidUpdate (prevProps) {
    console.log(prevProps.login.isFetching, this.props.login.isFetching, 'duality test')
    if (prevProps.login.isFetching && !this.props.login.isFetching) {
      this.setState({
        showUpdateSuccessModal: true
      })
    }
  }

  setSound (sound) {
    this.setState({ sound })
  }

  setDescription (description) {
    this.setState({ description })
  }

  onSaveButton () {
    console.log(this.state.instagramAccessToken, 'instagram_access_token')
    const userData = {
      sound: this.state.sound,
      description: this.state.description,
      instagram_token: this.state.instagramAccessToken
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
      // this.instagramAccessToken = access_token
      this.setState({
        instagramAccessToken: access_token
      })
    }
  }

  onExitStatusPage () {
    this.setState({
      showUpdateSuccessModal: false
    })
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
        <StatusMessage
          visible={this.state.showUpdateSuccessModal}
          message={'Updated'}
          transparent
          onExit={() => this.onExitStatusPage()}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    workouts: state.workout.data,
    login: state.login
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
