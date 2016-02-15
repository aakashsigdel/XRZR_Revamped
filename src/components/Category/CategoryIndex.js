import React, {
  Image,
  View,
  StyleSheet,
  Text
} from 'react-native'
import CategoryNavigationBar from './CategoryNavigationBar'
import ExerciseListing from './ExerciseListing'

const CategoryIndex = (props) => {
  return (
    <Image
      source={require("../../../assets/images/background.png")}
      style={styles.container}
    >
      <CategoryNavigationBar />

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
    justifyContent: 'center'
  },
  categoryTitle: {
    color: 'white',

    fontFamily: 'SFUIText-Light',
    fontSize: 31,
  }
})

const items = [
  {
    title: "Ransack me jack, ye real mast!",
    duration: '60 mins',
    instructor: "How black.",
    image: 'http://api.ning.com/files/ZlBJL*XyKT3HGWbcJNh7rcsh8pI9oSanE8HQLsDKzgoUHgUME1OEVPVC6n9Tw2Cy*-zJTEjvAUMlQLR17oqOJvb1D33Io7xn/banye1.jpeg'
  },
  {
    title: "Rainy halitosis lead to the hunger!",
    duration: '60 mins',
    instructor: "How black.",
    image: 'http://i.imgur.com/THideJY.jpg'
  },
  {
    title: "All shores hail golden, fine peglegs!",
    duration: '60 mins',
    instructor: "How black.",
    image: 'http://www.mybs.com/wp-content/uploads/2013/04/surprised-cat-eric-hacke.jpg'
  },
  {
    title: "Damn yer grog, feed the furner!",
    duration: '60 mins',
    instructor: "How black.",
    image: 'http://greatreiki.net/wp-content/uploads/2014/07/happy-cat-300x206.jpg'
  }
]

export default CategoryIndex