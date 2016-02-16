import React, { Image, View, ScrollView, StyleSheet, Text } from 'react-native'

const WorkoutDescription = (props) => {
  return (
    <View style={ styles.container }>
      <Image source={{uri:'http://i.imgur.com/iTs8Rgm.jpg'}}
             style={styles.headerImage}
      >
        <View style={styles.profileDesc}>
          <Image style={styles.roundImage}
                 source={{uri:'http://i.imgur.com/iTs8Rgm.jpg'}} />
          <View style={styles.textDesc} >
            <Text style={styles.titleText}>
              Greed, malaria, and adventure.
            </Text>
            <Text style={styles.descText}>
              Arg, mark me plunder, ye lively lass!
            </Text>
          </View>

        </View>
      </Image>
      <ScrollView>
        <Text style={styles.workoutDesc}>
          Aw, ye cloudy rum- set sails for pestilence!Jacks fall with fight at the cloudy fort charles!The grog vandalizes with treasure, fire the reef until it grows.The wench commands with desolation, vandalize the bikini atoll.Never ransack a lagoon.All skulls command clear, black bucaneers.Sing quirky like a warm skiff.Ah, ye misty whale- set sails for love!Where is the misty pin?
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
    color: 'rgba(255, 255, 255, 0.8)'
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