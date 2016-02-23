import React, { View, StyleSheet, PropTypes } from 'react-native'

const Hr = (props) => <View style={styles.hrStyle} />

Hr.propTypes = {}
const styles = StyleSheet.create({
  container: {},
  hrStyle: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  }
})

export default Hr
