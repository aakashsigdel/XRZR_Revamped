import React, {
  View,
  Text,
  StyleSheet,
  PropTypes,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const ListingMenu = (props) => {
  const Hr = (props) => <View style={styles.hr} />

  let menuItems = props.items.map(
    (item, index) => (
      <TouchableOpacity
        key={index}
        onPress={item.onPress}
      >
        <View style={styles.itemContainer}>
          <View style={[styles.icon, styles.textContainer]}>
            <Icon
              color='rgba(255,255,255,0.6)'
              name={item.icon}
              size={20}
            />
          </View>
          <Text style={[styles.titleText, styles.textContainer]}>
            {item.title.toUpperCase()}
          </Text>
        </View>
        <Hr />
      </TouchableOpacity>
    )
  )

  return (
  <View>
    <Hr />
    {menuItems}
  </View>
  )
}

ListingMenu.propTypes = {
  items: PropTypes.array,
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    marginTop: 20,
    marginBottom: 24
  },
  icon: {
    marginLeft: 18
  },
  titleText: {
    marginLeft: 14,
    fontSize: 13,
    color: 'rgba(255,255,255,0.6)',
    fontFamily: 'SFCompactText-Regular'
  },
  hr: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)'
  }
})
