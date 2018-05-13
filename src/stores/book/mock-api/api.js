const books = require('./books')

const delayedPromise = (data, delaySecs = 2) =>
  new Promise(resolve => setTimeout(() => resolve(data), delaySecs * 1000))

const fetchBooks = () => delayedPromise(books)

export default {
  fetchBooks,
}
