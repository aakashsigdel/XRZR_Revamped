import React, { View, StyleSheet, PropTypes } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Hr = (props) => (
  <LinearGradient
    colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
    end={[1, 0.5]}
    locations={[0, 0.2, 0.8, 1]}
    start={[0, 0.5]}
    style={styles.hrStyle}
  />
)

Hr.propTypes = {}
const styles = StyleSheet.create({
  container: {},
  hrStyle: {
    height: 1,
    opacity: 0.2
    //backgroundColor: 'rgba(255, 255, 255, 0.2)'
  }
})

export default Hr
