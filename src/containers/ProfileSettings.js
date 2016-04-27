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
import Loader from '../components/Common/Loader'
import { fetchInstagramPhotos } from '../redux_x/actions/userActionCreators'

class ProfileSettings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sound: false,
      description: props.user[props.userId].description,
      showUpdateSuccessModal: false,
      instagramAccessToken: props.user[props.userId].instagramToken,
      instagramId: props.user[props.userId].instagramId,
      instagramUsername: props.user[props.userId].instagramUsername,
      isFetching: false
    }
  }

  componentDidUpdate (prevProps) {
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
    const userData = {
      sound: this.state.sound,
      description: this.state.description,
      instagram_token: this.state.instagramAccessToken,
      instagram_username: this.state.instagramUsername,
      instagram_id: this.state.instagramId
    }
    this.props.updateUser(userData)
  }

  onInstagramConnect () {
    this.setState({
      isFetching: true
    })

    RNInstagramOAuth(
      INSTAGRAM_DETAILS.clientId,
      INSTAGRAM_DETAILS.redirectURL,
      this._instagramLoginCallback.bind(this)
    )
  }

  _instagramLoginCallback (error, access_token) {
    if (error) {
      this.setState({
        isFetching: false
      })
      alert('Couldn\'t get instagram details')
    }

    if (access_token !== undefined) {
      // this.instagramAccessToken = access_token
      this.setState({
        instagramAccessToken: access_token
      })
      let promiseArray = []
      promiseArray[0] = this._fetchInstagramUserDetail(access_token)
      promiseArray[1] = this.props.fetchInstagramPhotos(this.props.login.id)
      Promise.all(promiseArray)
      .then(() => {
        this.setState({
          isFetching: false
        })
      }, () => {
        Alert.alert(
          'Cannot fetch data',
          'Make sure you are connected to the internet'
        )
      })
    }
  }

  _fetchInstagramUserDetail (accessToken) {
    const instagramUrl = 'https://api.instagram.com/v1/users/self/?access_token=' + accessToken
    return fetch(instagramUrl)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        instagramUsername: responseData.data.username,
        instagramId: responseData.data.id
      })
    })
  }

  onExitStatusPage () {
    this.setState({
      showUpdateSuccessModal: false
    })
  }

  render () {
    if (this.state.isFetching) {
      return <Loader message={'Fetching Instagram Details'} />
    }
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
          statusMessage={'Profile detais updated'}
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
    updateUser: bindActionCreators(updateUser, dispatch),
    fetchInstagramPhotos: bindActionCreators(fetchInstagramPhotos, dispatch)
  }
}

export default connect(
  (state) => mapStateToProps(state),
  mapDispatchToProps
)(ProfileSettings)
