var express = require('express');
var path = require('path');

var app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.listen(3000, (err) => {
    if(!err)
        console.log('Сервер запущен.');
});
