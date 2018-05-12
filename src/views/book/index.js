import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { View, Button } from 'react-native'

const BooksScreen = ({ navigation }) => (
  <View>
    <Button
      onPress={() => navigation.navigate('Authors')}
      title="Go to Authors"
    />
    <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
  </View>
)

export default createStackNavigator({
  Books: {
    screen: BooksScreen,
  },
})
