import { YellowBox } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import BookStack from './src/views/book'
import AuthorStack from './src/views/author'

YellowBox.ignoreWarnings([
  `Warning: isMounted(...) is deprecated`,
  'Module RCTImageLoader',
])

const App = createDrawerNavigator({
  Books: BookStack,
  Authors: AuthorStack,
})

export default App
