import React, {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

export const Categories = (props) => {
  const categories = props.categories.map(
    (category, index) => (
      <View key={index}>
        <Image
          style={styles.catImage}
          source={{ uri: category.coverImage }}>
          <Text style={styles.catTitle}>
            { category.tag }
          </Text>
        </Image>
      </View>
    )
  )

  return (
    <View>
      <Text style={styles.heading}>
        CATEGORIES
      </Text>
      { categories }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  },
  heading: {
    marginTop: 18,
    marginLeft: 14,
    marginBottom: 5.5,
    color: 'white',
    fontFamily: 'SFCompactText-Semibold',
    fontSize: 12
  },
  catImage:{
    height: 84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catTitle: {
    backgroundColor: 'transparent',
    color: 'white',
  }
})