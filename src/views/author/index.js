import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Button } from 'react-native'

const AuthorsScreen = ({ navigation }) => (
  <Button
    onPress={() => navigation.navigate('Books')}
    title="Go back to Books"
  />
)

export default createStackNavigator({
  Authors: {
    screen: AuthorsScreen,
  },
})
