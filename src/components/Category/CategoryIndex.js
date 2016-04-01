import React, {
  Image,
  View,
  PropTypes,
  StyleSheet,
  Text
} from 'react-native'
import CategoryNavigationBar from './CategoryNavigationBar'
import ExerciseListing from './ExerciseListing'
import { VIEWPORT } from '../../constants/appConstants'

const CategoryIndex = (props) => {
  return (
    <View
      style={styles.container}
    >

      <View style={styles.container}>
        <View style={styles.header}>

          <Image
            source={{uri: props.catItem.coverImage + '=s300'}}
            style={styles.coverImage}
          >
            <Text style={styles.categoryTitle}>
              {props.catItem.tag}
            </Text>
          </Image>

        </View>
        <View style={styles.listings} >

          <ExerciseListing
            data={props.catData}
            onWorkoutSelect={props.onWorkoutSelect}
          />

        </View>
      </View>
      <CategoryNavigationBar
        onBackButton={props.onBackButton}
        onSearch={props.onSearch}
      />
    </View>
  )
}

CategoryIndex.propTypes = {
  catData: PropTypes.array,
  catItem: PropTypes.object,
  onBackButton: PropTypes.func,
  onSearch: PropTypes.func,
  onWorkoutSelect: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1
  },
  listings: {
    flex: 2.16
  },
  coverImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    width: VIEWPORT.width
  },
  categoryTitle: {
    color: 'white',

    fontFamily: 'SFUIText-Light',
    fontSize: 31
  }
})

export default CategoryIndex
