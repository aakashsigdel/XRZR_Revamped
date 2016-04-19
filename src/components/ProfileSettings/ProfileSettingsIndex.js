'use strict'

import React, {
  Component,
  StyleSheet,
  View
} from 'react-native'
import Cover from '../Common/Cover'
import Navigation from './Navigation'
import Settings from './Settings'
import Button from './Button'
import { VIEWPORT } from '../../constants/appConstants'

export default class ProfileSettingsIndex extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.cover}>
          <Cover
            user={this.props.user}
          />
        </View>
        <View style={styles.settings}>
          <Settings
            setSound={this.props.setSound}
            setDescription={this.props.setDescription}
            onInstagramConnect={this.props.onInstagramConnect}
            user={this.props.user}
          />
          <Button
            onSaveButton={this.props.onSaveButton}
          />
        </View>
        <Navigation
          navigator={this.props.navigator}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cover: {
    height: 251.5 * VIEWPORT.height / 667
  },
  settings: {
    height: 416 * VIEWPORT.height / 667
  }
})
