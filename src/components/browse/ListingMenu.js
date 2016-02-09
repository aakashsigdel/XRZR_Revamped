import React, {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export const ListingMenu = (props) => {
  const Hr = (props) => <View style={styles.hr} />

  let menuItems = props.items.map(
    (item, index) => (
      <View key={index}>
        <View style={styles.itemContainer}>
          <Text style={[styles.icon, styles.textContainer]}>
            {item.icon}
          </Text>
          <Text style={[styles.titleText, styles.textContainer]}>
            {item.title.toUpperCase()}
          </Text>
        </View>
        <Hr />
      </View>
    )
  )

  return (
  <View>
    <Hr />
    {menuItems}
  </View>
  )
}

const styles= StyleSheet.create({
  container:{

  },
  itemContainer: {
    flexDirection: 'row',
  },
  textContainer:{
    marginTop: 20,
    marginBottom: 24,
  },
  icon: {
    marginLeft: 18,
    fontSize: 12,
  },
  titleText: {
    marginLeft: 14,
    fontSize: 12,
  },
  hr: {
    height: 1,
    backgroundColor: 'black',
  }
})