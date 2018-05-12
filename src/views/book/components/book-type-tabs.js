import React from 'react'
import { View, Button } from 'react-native'
import Title from '../../../components/Title'

export const AllBooksTab = ({ navigation }) => (
  <View>
    <Title text="All Books" />
    <Button
      onPress={() => navigation.navigate('Authors')}
      title="Go to Authors"
    />
    <Button
      onPress={() => navigation.navigate('NonfictionBooksTab')}
      title="Go to NonfictionBooksTab"
    />
    <Button onPress={() => navigation.openDrawer()} title="Open Drawer" />
  </View>
)

export const FictionBooksTab = () => (
  <View>
    <Title text="Fiction Books" />
  </View>
)

export const NonfictionBooksTab = () => (
  <View>
    <Title text="Nonfiction Books" />
  </View>
)
