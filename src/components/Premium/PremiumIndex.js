import React, { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {VIEWPORT} from '../../constants/appConstants'

const PremiumIndex = (props) => {
  return (
    <Image
      source={require("../../../assets/images/background.png")}
      style={ styles.container }>

      <TouchableOpacity onPress={props.onClosePressed} style={styles.closeButton}>
        <Icon name="close" size={35} color="white" />
      </TouchableOpacity>

      <View>
        <View style={styles.messageContent}>
          <Text style={styles.upgradeTitle}>UPGRADE TO PREMIUM</Text>
          <View style={styles.upgradeDesc}>
            <View style={styles.rowItem}>
              <Icon name="done" size={30} color="white" />
              <Text style={styles.textDesc}>No Advertisements</Text>
            </View>
            <View style={styles.rowItem}>
              <Icon name="done" size={30} color="white" />
              <Text style={styles.textDesc}>Create your own Workouts</Text>
            </View>
            <View style={styles.rowItem}>
              <Icon name="done" size={30} color="white" />
              <Text style={styles.textDesc}>Use XRZR offline</Text>
            </View>
          </View>

        </View>
        <View style={styles.upgradeButton}>
            <Text style={styles.upgradeButtonText}>UPGRADE $6.99/mo</Text>
        </View>
      </View>

    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    width: VIEWPORT.width
  },
  closeButton: {
    marginLeft: 10,
    marginTop: 25
  },
  messageContent: {
    margin: 12.5,
    marginTop: 121.5,
    marginBottom: 5,
    padding: 50,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  upgradeTitle: {
    fontFamily: 'Avenir-Medium',
    fontSize: 20,
    color: "white"
  },
  rowItem: {
    flexDirection: 'row',
    paddingTop: 10
  },
  textDesc: {
    marginLeft: 10,
    marginTop: 10,

    fontFamily: 'Avenir-Roman',
    fontSize: 12,
    color: 'white'
  },
  upgradeButton: {
    margin: 12.5,
    marginTop:1,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  upgradeButtonText: {
    padding: 20,
    textAlign: 'center',

    fontFamily: 'Avenir-Book',
    fontSize: 14,
    color: 'white'
  }
})

export default PremiumIndex