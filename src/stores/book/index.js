import { types as t, flow, getEnv } from 'mobx-state-tree'
import bookApi from './mock-api/api'

let store = null

const Book = t.model('Book', {
  id: t.identifier(),
  title: t.string,
  genre: t.string,
  pageCount: t.number,
  authors: t.array(t.string),
  image: t.maybe(t.string),
  inStock: t.optional(t.boolean, true),
})

const sortFn = (a, b) => (a.title > b.title ? 1 : a.title === b.title ? 0 : -1)

export const BookStore = t
  .model('BookStore', {
    books: t.array(Book),
    filter: t.optional(
      t.enumeration('FilterEnum', ['All', 'Fiction', 'Nonfiction']),
      'All'
    ),
  })
  .views(self => ({
    get api() {
      return getEnv(self).api
    },
    get sortedBooks() {
      return self.filter === 'All'
        ? self.books.sort(sortFn)
        : self.books.filter(bk => bk.genre === self.filter).sort(sortFn)
    },
  }))
  .actions(self => {
    function updateBooks(books) {
      books.items.forEach(book => {
        self.books.push({
          id: book.id,
          title: book.volumeInfo.title,
          genre: book.volumeInfo.categories[0],
          pageCount: book.volumeInfo.pageCount,
          authors: book.volumeInfo.authors,
          publisher: book.volumeInfo.publisher,
          image: book.volumeInfo.imageLinks.smallThumbnail,
        })
      })
    }

    const loadBooks = flow(function* loadBooks() {
      if (self.books.length > 0) return
      try {
        const books = yield self.api.fetchBooks()
        updateBooks(books)
      } catch (err) {
        console.error('Failed to load books ', err)
      }
    })

    const setGenre = genre => {
      self.filter = genre
    }

    return {
      loadBooks,
      setGenre,
    }
  })

export default (api = bookApi) => {
  if (store) return store

  store = BookStore.create({ books: [] }, { api })
  return store
}
