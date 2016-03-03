import React, {
  PropTypes
} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import AdvertisementIndex from '../components/Advertisement/AdvertisementIndex'

const Advertisement = (props) => {
  return (
    <AdvertisementIndex
      onClose={props.onClose}
    />
  )
}

Advertisement.propTypes = {}
export default connect(
  (state) => {
    return {}
  },
  (dispatch) => {
    return {}
  }
)(Advertisement)
