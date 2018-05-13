import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react'
import Book from './Book'

export default observer(({ books }) => (
  <View>{books.map(book => <Book key={book.id} book={book} />)}</View>
))
