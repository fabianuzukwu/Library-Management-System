const database = require( '../model/database.json' );
const fs = require( "fs" );

const SaveToDB = ( data ) => {
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



module.exports = {
    savelogsToDB
}
