import React, {
  Component,
  LayoutAnimation,
  Modal,
  StyleSheet,
  View
} from 'react-native'
import Navigation from './Navigation'
import Header from './Header'
import Info from './Info'
import ProgressBar from './ProgressBar'
import {sendAjax} from '../../utilities/SendAjax'

export default class NewExerciseUploadingIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      completed: 0
    }
  }

  componentDidMount () {
    console.warn('start')
    let a = new FormData()
    a.append('title', this.props.exercise.title)
    a.append('description', this.props.exercise.description)
    a.append('tags', this.props.exercise.tags)
    a.append('sound', this.props.exercise.sound)

    console.log(this.props.exercise)
    a.append('video', {uri: this.props.exercise.videoUri, name: 'hello.mov', type: 'video/mov'})

    sendAjax({
      type: 'post',
      url: 'https://xrzr.backlect.com/api/xrzr/v1.0/exercise',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Accept', 'application/json, text/javascript')
      },
      success: function (res) {
        console.log(res)
      },
      error: function (a) {
        console.warn('error')
        console.log(a)
      },
      complete: function (w) {
        console.warn('complete')
        console.log(w)
      },
      progress: function (evt) {
        console.log('hello')
        if (evt.lengthComputable) {
          var percentComplete = (evt.loaded / evt.total) * 100
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
          this.setState({completed: percentComplete})
        }
      }.bind(this),
      formData: a,
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
        <ProgressBar
          completed={this.state.completed}
          remaining={100 - this.state.completed}
        />
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
