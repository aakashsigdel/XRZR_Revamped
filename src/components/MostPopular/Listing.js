'use strict'

import React, {
  ListView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { VIEWPORT } from '../../constants/appConstants'

const _renderRow = rowData => {
  const titleText = rowData.title.length > 40
    ? rowData.title.slice(0, 40) + '...'
    : rowData.title
  return (
    <TouchableOpacity
      activeOpacity={0.6}
    >
      <Image
        source={{ uri: rowData.image_16x9 }}
        style={ styles.rowContainer }
      >
        <View style={ styles.overlay }>
          <View style={ styles.imageAndDescWrapper }>
            <Image
              source={{ uri: rowData.instructor.image }}
              style={ styles.titleImage }
            />
            <View style={ styles.description }>
              <Text style={ styles.headerText }>
                { titleText.toUpperCase() }
              </Text>
              <Text style={ styles.text }>
                { rowData.duration + ' . ' + rowData.instructor.name }
              </Text>
            </View>
          </View>
          <Icon
            name='ios-arrow-right'
            size={ 20 }
            color='rgba(255, 255, 255, 0.6)'
            style={ styles.icon }
          />
        </View>
      </Image>
    </TouchableOpacity>
  )
}

const Listing = props => {
  let ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 != r2
  })
  let dataSource = ds.cloneWithRows( props.mostPopularWorkout )
  return (
    <ListView
      dataSource={ dataSource }
      renderRow={ _renderRow }
    />
  )
}

const styles = StyleSheet.create({
  rowContainer: {
    height: 85,
    width: VIEWPORT.width
  },
  overlay: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  imageAndDescWrapper: {
    flex: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleImage: {
    width: 35,
    height: 35,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: 'white',
    marginLeft: 10
  },
  description: {
    marginLeft: 10
  },
  headerText: {
    fontFamily: 'SFCompactText-Semibold',
    fontWeight: 'bold',
    fontSize: 10,
    color: 'white',
    letterSpacing: 1
  },
  text: {
    opacity: 0.8,
    fontFamily: 'Avenir-Book',
    fontWeight: 'bold',
    fontSize: 10,
    color: 'white',
    letterSpacing: 1
  },
  icon: {
    flex: 1,
  }
})

export default Listing
