import React, {
  Component,
  LayoutAnimation,
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {EXERCISE_BASE_URL} from '../constants/appConstants'

import {sendAjax} from '../utilities/SendAjax'
import NewExerciseUploadingIndex from '../components/NewExerciseUploading/NewExerciseUploadingIndex'

class NewExerciseUploading extends Component {
  constructor (props) {
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

    if (this.props.update === false) {
      console.log(this.props.exercise)
    } else {
      a.append('video', {uri: this.props.exercise.videoUri, name: 'hello.mov', type: 'video/mov'})
    }

    sendAjax({
      type: 'POST',
      url: EXERCISE_BASE_URL,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Accept', 'application/json, text/javascript')
        xhr.setRequestHeader('access-token', this.props.userCredentials.access_token)
      }.bind(this),
      success: function (res) {
        console.log('success')
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
    const onSaveButton = () => props.navigator.popToTop()
    const onCancel = () => props.navigator.pop()

    return (
      <NewExerciseUploadingIndex
        user={props.userCredentials}
        completed={this.state.completed}
        exercise={props.exercise}
        navigator={props.navigator}

        onCancel={onCancel}
        onSaveButton={onSaveButton}
      />
    )
  }
}

NewExerciseUploading.propTypes = {}
export default connect(
  (state) => {
    return {
      userCredentials: state.login
    }
  },
  (dispatch) => {
    return {}
  }
)(NewExerciseUploading)
