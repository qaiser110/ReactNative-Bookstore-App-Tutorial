import { types as t, flow, getEnv } from 'mobx-state-tree'
import bookApi from './api'

let store = null

const Book = t.model('Book', {
  id: t.identifier(),
  title: t.string,
  pageCount: t.number,
  authors: t.array(t.string),
  image: t.maybe(t.string),
  inStock: t.optional(t.boolean, true),
})

export const BookStore = t
  .model('BookStore', {
    books: t.array(Book),
  })
  .views(self => ({
    get api() {
      return getEnv(self).api
    },
  }))
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
        const books = yield self.api.fetchBooks()
        updateBooks(books)
      } catch (err) {
        console.error('Failed to load books ', err)
      }
    })

    return {
      loadBooks,
    }
  })

export default (api = bookApi) => {
  if (store) return store

  store = BookStore.create({ books: [] }, { api })
  return store
}
