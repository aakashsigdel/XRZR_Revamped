import React, {
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import NewExerciseUploadingIndex from '../components/NewExerciseUploading/NewExerciseUploadingIndex'

const NewExerciseUploading = (props) => {
  const onSaveButton = () => props.navigator.popToTop()
  const onCancel = () => props.navigator.pop()

  return (
    <NewExerciseUploadingIndex
      user={props.user}
      exercise={props.exercise}
      navigator={props.navigator}

      onCancel={onCancel}
      onSaveButton={onSaveButton}
    />
  )
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
