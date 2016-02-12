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
          <View style={styles.overlay}>
            <Text style={styles.catTitle}>
              { category.tag }
            </Text>
          </View>
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
  catImage:{
    height: 84,
  },
  catTitle: {
    backgroundColor: 'transparent',
    color: 'white',
  }
})