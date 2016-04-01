import React, {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  PropTypes
} from 'react-native'

import { VIEWPORT } from '../../constants/appConstants'

export const Categories = (props) => {
  const categories = props.categories.map(
    (category, index) => {
      const handleCategoryPressed = () => props.onCategorySelect(category.id)
      return (
        <TouchableOpacity
          key={index}
          onPress={handleCategoryPressed}
        >
          <Image
            source={{uri: category.coverImage + '=s300'}}
            style={styles.catImage}
          >
            <View style={styles.overlay}>
              <Text style={styles.catTitle}>
                {category.tag}
              </Text>
            </View>
          </Image>
        </TouchableOpacity>
      )
    }
  )

  return (
    <View>
      <Text style={styles.heading}>
        CATEGORIES
      </Text>
      {categories}
    </View>
  )
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  onCategorySelect: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  heading: {
    marginTop: 18,
    marginLeft: 14,
    marginBottom: 5.5,
    color: 'white',
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 12
  },
  catImage: {
    width: VIEWPORT.width,
    height: 84
  },
  catTitle: {
    backgroundColor: 'transparent',
    color: 'white'
  }
})

export default Categories
