import React from 'react'
import { View, Button } from 'react-native'

import Title from '../../components/Title'

export default ({ navigation }) => (
  <View>
    <Title text="Authors List" />
    <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
    <Button onPress={() => navigation.navigate('Books')} title="Go to Books" />
  </View>
)
