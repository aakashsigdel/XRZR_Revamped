import React, {
  Image,
  View,
  StyleSheet,
  Text
} from 'react-native'
import CategoryNavigationBar from './CategoryNavigationBar'
import ExerciseListing from './ExerciseListing'
import { VIEWPORT } from '../../constants/appConstants'

const CategoryIndex = (props) => {
  return (
    <Image
      source={require("../../../assets/images/background.png")}
      style={styles.container}
    >


      <View style={ styles.container }>
        <View style={ styles.header }>

          <Image style={ styles.coverImage }
                 source={ {uri: props.catItem.coverImage} } >
            <Text style={ styles.categoryTitle }>
              {props.catItem.tag}
            </Text>
          </Image>

        </View>
        <View style={ styles.listings } >

          <ExerciseListing data={props.catData}
                           onWorkoutSelect={props.onWorkoutSelect}
          />

        </View>
      </View>
      <CategoryNavigationBar
        onSearch={props.onSearch}
        onBackButton={props.onBackButton}
      />
    </Image>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1,
  },
  listings: {
    flex: 2.16,
  },
  coverImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    width: VIEWPORT.width,
  },
  categoryTitle: {
    color: 'white',

    fontFamily: 'SFUIText-Light',
    fontSize: 31,
  }
})

export default CategoryIndex