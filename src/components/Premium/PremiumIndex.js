import React, {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  PropTypes
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {VIEWPORT} from '../../constants/appConstants'

const PremiumIndex = (props) => {
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        onPress={props.onClosePressed}
        style={styles.closeButton}
      >
        <Icon
          color='white'
          name='close'
          size={35}
        />
      </TouchableOpacity>

      <View>
        <View style={styles.messageContent}>
          <Text style={styles.upgradeTitle}>
            UPGRADE TO PREMIUM
          </Text>
          <View style={styles.upgradeDesc}>
            <View style={styles.rowItem}>
              <Icon
                color='white'
                name='done'
                size={30}
              />
              <Text style={styles.textDesc}>
                No Advertisements
              </Text>
            </View>
            <View style={styles.rowItem}>
              <Icon
                color='white'
                name='done'
                size={30}
              />
              <Text style={styles.textDesc}>
                Create your own Workouts
              </Text>
            </View>
            <View style={styles.rowItem}>
              <Icon
                color='white'
                name='done'
                size={30}
              />
              <Text style={styles.textDesc}>
                Use XRZR offline
              </Text>
            </View>
          </View>

        </View>
        <TouchableOpacity
          onPress={props.onUpgradeMonthly}
          style={styles.upgradeButton}
        >
            <Text style={styles.upgradeButtonText}>
              UPGRADE $9/mo
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onUpgradeYearly}
          style={styles.upgradeButton}
        >
          <Text style={styles.upgradeButtonText}>
            UPGRADE $84 / year
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

PremiumIndex.propTypes = {
  onClosePressed: PropTypes.func
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
    marginTop: 65,
    marginBottom: 5,
    padding: 50,
    paddingBottom: 90,
    backgroundColor: 'rgba(255,255,255,0.2)'
  },
  upgradeTitle: {
    fontFamily: 'Avenir-Medium',
    fontSize: 19,
    color: 'white',
    paddingTop: 5
  },
  rowItem: {
    flexDirection: 'row',
    paddingTop: 10
  },
  textDesc: {
    marginLeft: 10,
    marginTop: 10,

    fontFamily: 'Avenir-Roman',
    fontSize: 13,
    color: 'white'
  },
  upgradeButton: {
    margin: 12.5,
    marginTop: 1,
    marginBottom: 1,
    backgroundColor: 'rgba(213, 10, 177, 1)'
  },
  upgradeButtonText: {
    padding: 14,
    textAlign: 'center',

    fontFamily: 'Avenir-Book',
    fontSize: 13,
    color: 'white'
  }
})

export default PremiumIndex
