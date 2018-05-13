import React from 'react'
import { View } from 'react-native'
import Title from '../../../components/Title'
import BookListView from './BookListView'

export const AllBooksTab = ({ navigation }) => (
  <View>
    <Title text="All Books" />
    <BookListView />
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
