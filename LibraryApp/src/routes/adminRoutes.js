var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
        {
            title: 'The Lightning Thief',
            genre: 'Fantasy',
            author: 'Rick Riordan',
            bookId: 28187,
            read: false
    },
        {
            title: 'The Sea of Monsters',
            genre: 'Fantasy',
            author: 'Rick Riordan',
            bookId: 28186,
            read: false
    },
        {
            title: 'Sophie\'s World : The Greek Philosophers',
            genre: 'Fantasy',
            author: 'Jostein Gaarder',
            read: false
    }
];

var router = function (nav) {
    
    adminRouter.route('/addBooks')
            .get(function(req, res){
                var url = 'mongodb://localhost:27017/libraryApp';
                mongodb.connect(url,function(err, db){
                    var collection = db.collection('books');
                    collection.insertMany(books, 
                         function(err, results){
                            res.send(results);
                            db.close();
                    });
                });    
                //res.send('');
            });    

    return adminRouter;
};

module.exports = router;
