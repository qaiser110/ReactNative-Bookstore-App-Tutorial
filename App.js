import { createDrawerNavigator } from 'react-navigation'
import BookStack from './src/views/book'
import AuthorStack from './src/views/author'

const App = createDrawerNavigator({
  Books: BookStack,
  Authors: AuthorStack,
})

export default App
