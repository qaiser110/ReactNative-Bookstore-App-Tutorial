import React from 'react'
import { Text } from 'react-native'
import { observer } from 'mobx-react'

export default observer(({ book }) => (
  <Text>
    {book.title} by {book.authors[0]}
  </Text>
))
