import React, { View, StyleSheet } from 'react-native'
import PremiumIndex from '../components/Premium/PremiumIndex'

const Premium = (props) => {

  const onClosePressed = navigator.pop

  return (
    <PremiumIndex
      onClosePressed={onClosePressed}
    />
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default Premium