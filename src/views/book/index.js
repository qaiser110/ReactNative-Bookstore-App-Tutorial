import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { observer } from 'mobx-react'

import BkStore from '../../stores/book'
import BookListView from './components/BookListView'
import BookDetailView from './components/BookDetailView'

const BookListTabs = observer(
  createBottomTabNavigator(
    {
      All: BookListView,
      Fiction: BookListView,
      Nonfiction: BookListView,
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarOnPress: () => {
          const { routeName } = navigation.state
          const store = BkStore()
          store.setGenre(routeName)
        },
      }),
      tabBarOptions: {
        labelStyle: {
          fontSize: 16,
          padding: 10,
        },
      },
    }
  )
)

export default createStackNavigator({
  BookList: BookListTabs,
  BookDetail: BookDetailView,
})
