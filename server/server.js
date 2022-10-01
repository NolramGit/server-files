const express = require('express');
const path = require('path');

const app = express();



app.use(express.static(path.resolve('client/dist')));

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(80, () =>{
    console.log('http://localhost', '\n', path.resolve(__dirname, '../dist/index.html'))
})