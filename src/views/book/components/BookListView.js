import React, { Component } from 'react'
import BookStore from '../../../stores/book'
import BookList from './BookList'

class BookListView extends Component {
  async componentWillMount() {
    this.store = BookStore()
    await this.store.loadBooks()
  }

  render() {
    return <BookList books={this.store.books} />
  }
}

export default BookListView
