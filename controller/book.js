const database = require( '../model/database.json' );
const fs = require( "fs" );

const saveToDB = ( data ) => {
    return new Promise( ( resolve, reject ) => {
        fs.writeFile( './model/database.json', data, ( err, data ) => {
            if ( err ) {
                reject( "error writing to file" );
            } else {
                resolve( "file written successfuly" );
            }
        } );
    } );
};

const savelogsToDB = ( data ) => {
    return new Promise( ( resolve, reject ) => {
        fs.appendFile( './model/logs.txt', data, ( error, data ) => {
            if ( error ) {
                reject( "Error appending to file" );
            } else {
                resolve( "File updated successfuly" );
            }
        } );
    } );
};



const allBooks = (req, res) => {
        const books = database;
        res.status(200).json({data: books})
    }


 const newBook = async (req, res) => {
        const { bookName, authors, isAvailable, borrowingRecords } = req.body;
        const id = database.length + 1;
        const book = {
            id: id,
            bookName: bookName,
            authors: authors,
            isAvailable: isAvailable,
            borrowingRecords: borrowingRecords
        }
        
        database.push(book)
        await saveToDB(JSON.stringify(database, null, 2))

        
        res.status(200).json({
            message: 'Book added successfully',
            data: book
        })
    }


    const singleBook = (req, res) => {
    const id = Number(req.params.id);

    const book = database.find(book => book.id === id);

    if (book === null) {
        return res.status(404).json({
            message: 'Book not found'
        });
    }

    res.status(200).json({
        data: book
    });
};


const updateBook = async (req, res) => {
    const id = Number(req.params.id);

    const book = database.find(book => book.id === id);

    if (book == undefined) {
        return res.status(404).json({
            message: 'Book not found'
        });
    }

    const { bookName, authors, isAvailable, borrowingRecords } = req.body;
    book.bookName = bookName || book.bookName,
    book.authors = authors || book.authors,
    book.isAvailable = isAvailable || book.isAvailable,
    book.borrowingRecords = borrowingRecords || book.borrowingRecords
    

await saveToDB(JSON.stringify(database, null, 2));
 
    res.status(200).json({
        message: 'Book updated successfully',
        data: database[indexBook]
    });
};


const deleteBook = async (req, res ) => {
    const id = Number(req.params.id);

    const indexBook = database.findIndex(book => book.id === id);

    if (indexBook === -1) {
        return res.status(404).json({
            message: 'Book not found'
        });
    }

     database.splice(indexBook, 1) ;

    await saveToDB(JSON.stringify(database, null, 2));

    res.status(200).json({
        message: 'Book deleted successfully',
    });
};

module.exports = {
    savelogsToDB,
    allBooks,
    singleBook,
    newBook,
    updateBook,
    deleteBook
};
 
