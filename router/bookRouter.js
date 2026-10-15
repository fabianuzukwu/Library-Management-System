const express = require('express')

const router = express.Router()

const {    allBooks,  singleBook, newBook, updateBook,deleteBook} = require('../controller/book')

const logger = require('../middleware/logger')

router.use(logger)

router.get('/allbooks',logger, allBooks)
router.get('/onebook',logger, singleBook)
router.post('/newbook',logger, newBook)
router.patch('/updatebook',logger,updateBook)
router.delete('/deletebook',logger, deleteBook)

module.exports = router