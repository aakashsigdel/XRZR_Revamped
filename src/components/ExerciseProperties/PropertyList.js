import React, {
  View,
  ScrollView,
  StyleSheet,
  PropTypes,
  Text,
  Switch
} from 'react-native'

import Hr from '../Common/Hr'

const PropertyListItem = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Hr />
      <View style={styles.itemContainer}>
        <Text style={styles.titleText}>EXERCISE NAME</Text>
        <Text style={styles.valueText}>{props.exercise.title}</Text>
      </View>
      <Hr />
      <View style={styles.itemContainer}>
        <Text style={styles.titleText}>TAGS</Text>
        <Text style={styles.valueText}>{props.exercise.tag}</Text>
      </View>
      <Hr />
      <View style={styles.itemContainer}>
        <Text style={styles.titleText}>SOUND</Text>
        <Switch
          disabled
          value={props.exercise.sound}
          style={styles.switchButton}
        />
      </View>
      <Hr />
      <View style={styles.descContainer}>
        <Text style={styles.titleText}>DESCRIPTION</Text>
        <Text style={styles.valueText}>{props.exercise.description}</Text>
      </View>
    </ScrollView>
  )
}

PropertyListItem.propTypes = {}
const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 7.5
  },
  descContainer: {
    marginTop: 25,
    marginBottom: 7.5
  },
  titleText: {
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'Avenir-Book',
    paddingBottom: 10
  },
  valueText: {
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'Avenir-Book'
  },
})

export default PropertyListItem
