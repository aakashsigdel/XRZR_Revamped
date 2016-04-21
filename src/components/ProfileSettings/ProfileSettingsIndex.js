'use strict'

import React, {
  Component,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import Cover from '../Common/Cover'
import Navigation from './Navigation'
import Settings from './Settings'
import Button from './Button'
import { VIEWPORT } from '../../constants/appConstants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class ProfileSettingsIndex extends Component {
  setChildTextInputRef (childTextInputRef) {
    this.childTextInputRef = childTextInputRef
  }

  scrollToInput (event) {
    this.refs.scroll.scrollToFocusedInput(event, this.childTextInputRef)
  }

  render () {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView ref='scroll'>
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
            setChildTextInputRef={(ref) => this.setChildTextInputRef(ref)}
            scrollToInput={(event) => this.scrollToInput(event)}
          />
        </View>
      </KeyboardAwareScrollView>
        <Button
          onSaveButton={this.props.onSaveButton}
        />
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
    height: 361 * VIEWPORT.height / 667
  }
})
