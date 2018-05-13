import { BookStore } from '../index'
import api from '../mock-api/api'

it('bookstore fetches data', async () => {
  const store = BookStore.create({ books: [] }, { api })
  await store.loadBooks()
  expect(store.books.length).toBe(10)
})
