import React, {
  ActivityIndicatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native'

const LoadingSign = (props) => {
  let loadingText = null
  if (props.loadingText) {
    loadingText = <Text style={styles.text}>{props.loadingText}</Text>
  }
  return (
    <View style={styles.container}>
      <ActivityIndicatorIOS
        size='large'
      />
      {loadingText}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 30,
    color: 'white',
    fontSize: 16
  }
})

export default LoadingSign
