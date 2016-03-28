import React, {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import Switch from 'react-native-material-switch'

import Hr from '../Common/Hr'

const PropertyListItem = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Hr />
      <View style={styles.itemContainer}>
        <Text style={styles.titleText}>EXERCISE NAME</Text>
        <TextInput
          defaultValue={props.isNewExercise ? '' : props.exercise.title}
          editable={props.isNewExercise}
          onChangeText={props.onExerciseTitleChange}
          style={styles.valueText}
        />
      </View>
      <Hr />
      <View style={styles.itemContainer}>
        <Text style={styles.titleText}>TAGS</Text>
        <TextInput
          defaultValue={props.isNewExercise ? '' : props.exercise.tag}
          editable={props.isNewExercise}
          onChangeText={props.onExerciseTagsChange}
          style={styles.valueText}
        />
      </View>
      <Hr />
      <View style={[styles.itemContainer, styles.additionalPadding]}>
        <Text style={styles.titleText}>SOUND</Text>
        <Switch
          activeBackgroundColor='#197461'
          activeButtonColor='#1DD7AB'
          activeButtonPressedColor='#1DD7AB'
          buttonRadius={10}
          inactiveButtonColor='#B0B0B4'
          inactiveButtonPressedColor='#B0B0B4'
          onChangeState={props.onExerciseSoundSwitchChange}
          switchHeight={15}
          switchWidth={33}
        />
      </View>
      <Hr />
      <View style={styles.descContainer}>
        <Text style={styles.titleText}>DESCRIPTION</Text>
        <TextInput
          editable={props.isNewExercise}
          multiline
          onChangeText={props.onExerciseDescriptionChange}
          placeholder={props.exercise.description}
          placeholderTextColor='rgba(255, 255, 255, 0.5)'
          style={styles.multilineValueText}
        />
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
    alignItems: 'center',
    marginRight: 5.5,
    paddingTop: 10,
    paddingBottom: 10
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
    width: 220,
    height: 40,
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 13,
    fontWeight: '900',
    fontFamily: 'Avenir-Book',
    textAlign: 'right',
  },
  multilineValueText: {
    height: 80,
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 13,
    fontWeight: '900',
    fontFamily: 'Avenir-Book'
  },
  additionalPadding: {
    paddingTop: 20,
    paddingBottom: 20
  }
})

export default PropertyListItem
