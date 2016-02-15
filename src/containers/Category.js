import React, { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import CategoryIndex from '../components/Category/CategoryIndex'

const Category = (props) => {
  return (
    <CategoryIndex />
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default connect((state) => {
  return {
    exercises: state.exercise,
    categories: state.category,
    instructors: state.instructor,
  }
})(Category)