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
import sendAjax from '../../utilities/SendAjax'

export default class NewExerciseUploadingIndex extends Component {

  componentDidMount () {
    sendAjax({
      type: 'get',
      url: params.url,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Accept', 'application/json, text/javascript');
      },
      success: function (res) {
        params.success && params.success(JSON.parse(res));
      },
      error: params.error,
      complete: params.complete,
      cache: true
    })
  }

  render (props = this.props) {
    return (
      <Modal
        animated
        visible
      >
      <View style={styles.container}>
        <Navigation
          handleCancelPress={props.onCancel}
          handleSavePress={props.onSaveButton}
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
