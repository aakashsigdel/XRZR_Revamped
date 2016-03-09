import React, {
  Image,
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

const WorkoutDescription = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: props.workout.image_16x9}}
        style={styles.headerImage}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => props.goToProfile(props.instructor.id)}
          style={styles.profileDesc}
        >
          <Image
            style={styles.roundImage}
            source={{uri: props.instructor.image}} />
          <View style={styles.textDesc} >
            <Text style={styles.titleText}>
              {props.workout.title.toUpperCase()}
            </Text>
            <Text style={styles.descText}>
              With {props.instructor.name} . {props.workout.duration}
            </Text>
          </View>

        </TouchableOpacity>
      </Image>
      <ScrollView>
        <Text style={styles.workoutDesc}>
          {props.workout.description}
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerImage: {
    height: 210
  },
  profileDesc: {
    marginTop: 168,
    marginLeft: 13,
    flexDirection: 'row'
  },
  roundImage: {
    height: 35,
    width: 35,
    borderRadius: 18,
    borderColor: 'white',
    borderWidth: 1
  },
  textDesc: {
    marginLeft: 12.5,
    paddingTop: 5,
    backgroundColor: 'transparent'
  },
  titleText: {
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 11,
    color: 'rgb(255, 255, 255)'
  },
  descText: {
    color: 'white',
    fontFamily: 'SFCompactDisplay-Regular',
    fontSize: 11
  },
  workoutDesc: {
    padding: 13,

    fontFamily: 'SFUIText-Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)'
  }
})

export default WorkoutDescription
