import React, {
  StyleSheet,
  Text
} from 'react-native'

// create a text node or a custom node based on text and custom props
export const getElement = (text, custom, componentStyle) => {
  if (text) {
    return (
      <Text style={ componentStyle }>
        {text}
      </Text>
    )
  }

  if (custom) {
    return (
      React.cloneElement(custom)
    )
  }
}

// return 0.6 if there is a function to make touchableopacity clickable
export const getActiveOpacity = func => {
  if (func) {
    return 0.6
  }
  return 1
}
