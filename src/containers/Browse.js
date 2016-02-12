import React, { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import BrowseScreen from '../components/browse/BrowseScreen'

const Browse = (props) => {
  return (
    <BrowseScreen />
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default connect(
  (state) => {
    return {
      workouts: state.workout,
      trendings: state.trending,
    }
  }
)(Browse)