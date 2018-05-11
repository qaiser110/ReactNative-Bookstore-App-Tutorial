import React from 'react'
import { View, Button } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'

const BooksScreen = ({ navigation }) => (
  <View>
    <Button
      onPress={() => navigation.navigate('Authors')}
      title="Go to Authors"
    />
    <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
  </View>
)

const AuthorsScreen = ({ navigation }) => (
  <Button
    onPress={() => navigation.navigate('Books')}
    title="Go back to Books"
  />
)

export const BookStack = createStackNavigator({
  Books: {
    screen: BooksScreen,
  },
})

export const AuthorStack = createStackNavigator({
  Authors: {
    screen: AuthorsScreen,
  },
})

const App = createDrawerNavigator({
  Books: {
    screen: BookStack,
  },
  Authors: {
    screen: AuthorStack,
  },
})

export default App
