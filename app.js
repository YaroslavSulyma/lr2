const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

/*app.get('*', function (req, res) {
    res.send('Hello World!');
});*/

/*app.get('/tasks/:id', function (req, res) {
    //req.params.id === '1'
    res.send('This is 1');
});*/

/*app.get('/tasks', function (req, res) {
    // req.query.q === 'kittens'
    // req.query.order === 'desc'
});*/

app.get('/', function (req, res) {
    res.render('index', {user: 'Vasya'});
});

app.listen(3000, function () {
    console.log('App started on http://localhost:3000');
});

