import React, {
  Component,
  LayoutAnimation,
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {sendAjax} from '../../utilities/SendAjax'
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
    const onSaveButton = () => props.navigator.popToTop()
    const onCancel = () => props.navigator.pop()

    return (
      <NewExerciseUploadingIndex
        user={props.user}
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
    return {}
  },
  (dispatch) => {
    return {}
  }
)(NewExerciseUploading)
