import React, { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Hr = (props) => <View style={styles.hrStyle} />

const ExerciseListItem = (props) => {
  return (
    <View >
      <Hr />
      <TouchableOpacity
        style={styles.container}
        onPress={() => props.onItemSelect(props.item.id)}
      >
        <Text style={[styles.textContent, styles.number]}>{props.item.index + 1}</Text>
        <Text style={styles.textContent}>{props.item.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center'
  },
  textContent: {
    padding: 3,
    fontFamily: 'Avenir-Book',
    color: 'rgba(255,255,255,0.6)'
  },
  number: {
    fontSize: 10
  },
  hrStyle: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }
})

export default ExerciseListItem
