'use strict'

import React, {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { VIEWPORT } from '../../constants/appConstants'
import Hr from '../Common/Hr'

const ActionScreen = (props) => {
  const _renderHr = () => {
    return <Hr />
  }

  const _populateRows = () => {
    return props.actionElements
    .map((child, index) => {
      return (
        <View
          key={index}
        >
          {_renderHr()}
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              try {
                props.actionElements[index].action()
              } catch (e) {
                props.navigator.pop()
              }
            }
            }>
            <View style={[styles.iconContainer, child.border && styles.iconBorder]}>
              {child.icon}
            </View>
            <Text style={styles.text}>{child.name}</Text>
          </TouchableOpacity>
        </View>
      )
    })
  }

  const _renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <Image
          source={{uri: props.actionTitle.image}}
          style={styles.titleImage}
        />
        <View style={styles.titleDescriptionContainer}>
          <Text style={styles.headerText}>
            {props.actionTitle.title}
          </Text>
          <Text style={styles.subText}>
            {props.actionTitle.subText}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View
      style={styles.superContainer}
    >
      <View style={styles.container}>
        {props.actionTitle ? _renderTitle() : null}
        {_populateRows()}
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.navigator.pop}
        style={styles.cancel}
      >
        <Text style={styles.cancelText}>
          CANCEL
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: VIEWPORT.width,
    height: VIEWPORT.height
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  cancel: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4B4E5E'
  },
  cancelText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Book',
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  iconBorder: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1
  },
  hr: {
    height: 1,
    backgroundColor: 'white',
    flex: 1,
    opacity: 0.5
  },
  text: {
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    fontWeight: '700',
    color: 'white'
  },
  titleImage: {
    width: 125,
    height: 70,
    opacity: 0.8,
    marginRight: 15
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20
  },
  headerText: {
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  subText: {
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold'
  }
})

export default ActionScreen
