import React from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react'
import Book from './Book'

export default observer(({ books, showBookDetail }) => (
  <View>
    {books.map(book => (
      <Book
        key={book.id}
        book={book}
        showBookDetail={showBookDetail}
      />
    ))}
  </View>
))
