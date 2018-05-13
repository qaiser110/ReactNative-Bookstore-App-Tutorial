import axios from 'axios'

const baseUrl = `https://www.googleapis.com/books/v1/volumes`
const { GBOOKS_KEY } = require('../../../keys')

const fetchBooks = () =>
  axios.get(`${baseUrl}?q=books&printType=books&key=${GBOOKS_KEY}`)

export default {
  fetchBooks,
}
