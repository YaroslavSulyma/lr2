const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false }));

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

app.post('/login',function(req,res){
    res.render('index',{user: req.body.user});
});

app.listen(3000, function () {
    console.log('App started on http://localhost:3000');
});

