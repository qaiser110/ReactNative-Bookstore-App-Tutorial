import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card } from 'react-native-elements'
import { observer } from 'mobx-react'

import BkStore from '../../../stores/book'

export default observer(() => {
  const store = BkStore()
  const book = store.selectedBook

  return (
    <View>
      <View>
        <Card title={book.title}>
          <View>
            <Image
              resizeMode="cover"
              style={{ width: '60%', height: 300 }}
              source={{ uri: book.image }}
            />
            <Text>Title: {book.title}</Text>
            <Text>Genre: {book.genre}</Text>
            <Text>No of pages: {book.pageCount}</Text>
            <Text>Authors: {book.authors.join(', ')}</Text>
            <Text>Published by: {book.publisher}</Text>
          </View>
        </Card>
      </View>
    </View>
  )
})
