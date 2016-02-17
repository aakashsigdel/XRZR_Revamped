import React, { Image, View, ScrollView, StyleSheet, Text } from 'react-native'

const WorkoutDescription = (props) => {
  return (
    <View style={ styles.container }>
      <Image source={{uri:props.workout.image_16x9}}
             style={styles.headerImage}
      >
        <View style={styles.profileDesc}>
          <Image style={styles.roundImage}
                 source={{uri:props.instructor.image}} />
          <View style={styles.textDesc} >
            <Text style={styles.titleText}>
              {props.workout.title}
            </Text>
            <Text style={styles.descText}>
              With {props.instructor.name} . {props.workout.duration}
            </Text>
          </View>

        </View>
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
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 2,
  },
  textDesc: {
    marginLeft: 12.5,
    backgroundColor: 'transparent',
  },
  titleText: {
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 14,
    color: 'rgb(255, 255, 255)'
  },
  descText: {
    color: 'white',
    fontFamily: 'SFCompactDisplay-Regular',
    fontSize: 13,
  },
  workoutDesc: {
    padding: 13,

    fontFamily: 'SFUIText-Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)'
  }
})

export default WorkoutDescription