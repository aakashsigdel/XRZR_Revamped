import React, {
  TouchableOpacity,
  PropTypes
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import Navigation from '../Navigation/Navigation'

const CategoryNavigationBar = (props) => {
  const navLeft = {
    custom: (
      <TouchableOpacity
        onPress={props.onBackButton}
      >
        <Icon
          backgroundColor='transparent'
          color='white'
          name='android-arrow-back'
          size={35}
        />
      </TouchableOpacity>
    )
  }
  const navMid = {}
  const navRight = {
    custom: (
      <TouchableOpacity onPress={props.onSearch}>
        <Icon
          backgroundColor='transparent'
          color='white'
          name='ios-search-strong'
          size={25}
          style={{ marginBottom: 5 }}
        />
      </TouchableOpacity>
    )
  }

  return (
    <Navigation
      left={navLeft}
      mid={navMid}
      position='absolute'
      right={navRight}
    />
  )
}

CategoryNavigationBar.propTypes = {
  onBackButton: PropTypes.func,
  onSearch: PropTypes.func
}
// const styles = StyleSheet.create({
//  container: {}
// })

export default CategoryNavigationBar
