import { types as t, flow } from 'mobx-state-tree'
import api from './api'

let store = null

const Book = t.model('Book', {
  id: t.identifier(),
  title: t.string,
  pageCount: t.number,
  authors: t.array(t.string),
  image: t.maybe(t.string),
  inStock: t.optional(t.boolean, true),
})

const BookStore = t
  .model('BookStore', {
    books: t.array(Book),
  })
  .actions(self => {
    function updateBooks(books) {
      books.items.forEach(book => {
        self.books.push({
          id: book.id,
          title: book.volumeInfo.title,
          pageCount: book.volumeInfo.pageCount,
          authors: book.volumeInfo.authors,
          publisher: book.volumeInfo.publisher,
          image: book.volumeInfo.imageLinks.smallThumbnail,
        })
      })
    }

    const loadBooks = flow(function* loadBooks() {
      try {
        const books = yield api.fetchBooks()
        updateBooks(books)
      } catch (err) {
        console.error('Failed to load books ', err)
      }
    })

    return {
      loadBooks,
    }
  })

export default () => {
  if (store) return store

  store = BookStore.create({ books: [] })
  return store
}
