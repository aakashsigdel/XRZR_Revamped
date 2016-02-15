import React, {
  Image,
  View,
  Text,
  PropTypes,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

const HeaderElement = (props)=>{

  return (
    <TouchableOpacity style={styles.container} onPress={()=>props.onWorkoutSelect(props.workout.id)}>
      <Image style={styles.parentImage}
             source={{ uri: props.workout.image_16x9 }} >

        <View style={styles.profileDesc}>
          <Image style={styles.roundImage}
                 source={{ uri: props.workout.instructor.image }} />
          <View style={styles.textDesc} >
            <Text style={styles.titleText}>
              {props.workout.title}
            </Text>
            <Text style={styles.descText}>
              {props.workout.instructor.name}
            </Text>
          </View>

        </View>


      </Image>
    </TouchableOpacity>
  )
}

//HeaderElement.propTypes = {
//  workout: PropTypes.string.isRequired,
//}


const styles = StyleSheet.create({
  container: {
    height: 210
  },
  parentImage: {
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
    color: 'rgba(255, 255, 255, 0.8)'
  },
  descText: {
    color: 'white',
    fontFamily: 'SFCompactDisplay-Regular',
    fontSize: 13,
  }
})

export default HeaderElement