import React, { Component } from 'react'
import { View } from 'react-native'
import { observer } from 'mobx-react'

import BkStore from '../../../stores/book'
import BookList from './BookList'
import Title from '../../../components/Title'

class BookListView extends Component {
  async componentWillMount() {
    this.store = BkStore()
    await this.store.loadBooks()
  }

  render() {
    const { routeName } = this.props.navigation.state

    const showBookDetail = book => {
      this.store.selectBook(book)
      this.props.navigation.navigate('BookDetail')
    }

    return (
      <View>
        <Title text={`${routeName} Books`} />
        <BookList
          books={this.store.sortedBooks}
          showBookDetail={showBookDetail}
        />
      </View>
    )
  }
}

export default observer(BookListView)
