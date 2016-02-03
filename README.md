[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Style guides and important notes
- For JS we use [JavaScript Standard Style](http://standardjs.com/).
- For file naming we use CamelCase.
- Always use functional components
- Make your components no longer than 20 lines
- Try not to write reducers more than 20 lines
- Always use arrow functions
- Try to write functions no more than 10 lines
- Always end your file with new line
- Try to make your files no more than 50 lines
- Structure your component as follows: 

```js
import React, {
  View,
} from 'react-native'

// functional components
const myComponent = props => {
  return (
    <View></View>
  )
}

// ---
// Props
// ---
myComponent.propTypes = {
}

myComponent.defaultProps = {
}

// ---
// Styles
// ---
const styles = StyleSheet.create({
})

export default myComponent

```
- If your component method is too complex, consider splitting it in several smaller component methods

```
- Never forget to write [PropTypes and DefaultProps](https://facebook.github.io/react/docs/reusable-components.html), by doing this you are helping other developers to understand how your component works.
- [Name your git branches](http://stackoverflow.com/a/6065944/1512430) as `group/*`. Never use your nickname or other words not related to what you are doing at the moment. The most common groups for this project are:
	- `ui/*`
	- `fix/*`
	- `feature/*`

