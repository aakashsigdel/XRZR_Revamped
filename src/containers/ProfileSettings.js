'use strict'

import React, {
  Component,
  View
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileSettingsIndex from '../components/ProfileSettings/ProfileSettingsIndex'

class ProfileSettings extends Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <ProfileSettingsIndex
          user={this.props.user[1]}
          navigator={this.props.navigator}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    workouts: state.workout
  }
}
export default connect(
  (state) => mapStateToProps(state)
)(ProfileSettings)
