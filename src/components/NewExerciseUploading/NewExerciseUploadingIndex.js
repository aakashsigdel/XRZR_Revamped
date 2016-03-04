import React, {
  Component,
  Modal,
  StyleSheet,
  View
} from 'react-native'
import Navigation from './Navigation'
import Header from './Header'
import Info from './Info'
import ProgressBar from './ProgressBar'

export default class NewExerciseUploadingIndex extends Component {
  _handleCancelPress () {
    this.props.toggleModalState()
  }

  _handleSavePress () {
    this.props.navigator.popToTop()
  }

  render () {
    return (
      <Modal
        animated
        visible
      >
      <View style={styles.container}>
        <Navigation
          handleCancelPress={() => this._handleCancelPress()}
          handleSavePress={() => this._handleSavePress()}
        />
        <Header
          user={this.props.user}
          exercise={this.props.exercise}
        />
        <Info />
        <ProgressBar />
      </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D2022',
    padding: 10
  }
})
