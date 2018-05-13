import { BookStore } from '../index'
import api from '../mock-api/api'

let store = null

beforeEach(async () => {
  store = BookStore.create({ books: [] }, { api })
  await store.loadBooks()
})

it('Bookstore fetches data', () => {
  expect(store.books.length).toBe(10)
})

it(`Bookstore filter is set when setGenre() is called with a valid filter value`, async () => {
  store.setGenre('Nonfiction')
  expect(store.filter).toBe('Nonfiction')
})

it(`Bookstore filter is NOT set when setGenre() is called with an invalid filter value`, async () => {
  expect(() => store.setGenre('Adventure')).toThrow()
})

it(`Books are sorted by title`, async () => {
  const books = store.sortedBooks
  expect(books[0].title).toBe('By The Book')
  expect(books[1].title).toBe('Jane Eyre')
})

it(`Books are sorted by title`, async () => {
  store.setGenre('Nonfiction')
  const books = store.sortedBooks
  expect(books.length).toBe(7)
})
