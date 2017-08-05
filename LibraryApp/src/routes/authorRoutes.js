var express = require('express');
var authorRouter = express.Router();

var router = function (nav) {
    var authors = [
        {
            name: 'John Smith',
            email: 'me@john-smith.com',
            url: 'http://www.john-smith/contact',
            read: false
        },
        {
            name: 'Andrew Roy',
            email: 'me@andrew-roy.com',
            url: 'http://www.roy-andrew/contact',
            read: false
       },
        {
            name: 'John Snow',
            email: 'me@john-snow.com',
            url: 'http://www.john-snow/contact',
            read: false
       }
];

    authorRouter.use(function (req, res, next) {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    });
    
    
    authorRouter.route('/')
        .get(function (req, res) {
            res.render('authorListView', {
                title: 'My Library App',
                nav: nav,
                authors: authors
            });
        });

    authorRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('authorView', {
                title: 'Author',
                nav: nav,
                author: authors[id]
            });
        });

    return authorRouter;
};
module.exports = router;
