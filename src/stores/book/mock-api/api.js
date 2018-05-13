const books = require('./books')

const delayedPromise = (data, delaySecs = 2) =>
  new Promise(resolve => setTimeout(() => resolve(data), delaySecs * 1000))

const fetchBooks = () => delayedPromise(books, 0.3)

export default {
  fetchBooks,
}
