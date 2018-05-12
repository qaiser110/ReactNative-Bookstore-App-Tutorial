import { createBottomTabNavigator } from 'react-navigation'

import {
  AllBooksTab,
  FictionBooksTab,
  NonfictionBooksTab,
} from './components/book-type-tabs'

export default createBottomTabNavigator({
  'All Books': AllBooksTab,
  Fiction: FictionBooksTab,
  Nonfiction: NonfictionBooksTab,
})
