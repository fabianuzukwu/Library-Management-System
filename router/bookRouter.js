const express = require('express')

const router = express.Router()

const {    allBooks,  singleBook, newBook, updateBook,deleteBook} = require('../controller/book')

const logger = require('../middleware/logger')


router.get('/allbooks',logger, allBooks)
router.get('/onebook/:id',logger, singleBook)
router.post('/newbook',logger, newBook)
router.patch('/updatebook/:id',logger,updateBook)
router.delete('/deletebook/:id',logger, deleteBook)

module.exports = router