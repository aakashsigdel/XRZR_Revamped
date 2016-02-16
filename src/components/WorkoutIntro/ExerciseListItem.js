import React, { View, StyleSheet, Text } from 'react-native'

const Hr = (props) => <View style={ styles.hrStyle } />

const ExerciseListItem = (props) => {
  return (
    <View >
      <Hr />
      <View style={ styles.container }>
        <Text style={styles.textContent}>{props.index}</Text>
        <Text style={styles.textContent}>{props.item.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12
  },
  textContent: {
    padding: 3,
    fontFamily: 'Avenir-Book',
    color: 'rgba(255,255,255,0.6)'
  },
  hrStyle:{
    height:1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
})

export default ExerciseListItem