import React from 'react'
import { ListItem } from 'react-native-elements'
import { observer } from 'mobx-react'

export default observer(({ book, showBookDetail }) => (
  <ListItem
    avatar={{ uri: book.image }}
    title={book.title}
    subtitle={`by ${book.authors.join(', ')}`}
    onPress={() => showBookDetail(book)}
  />
))
