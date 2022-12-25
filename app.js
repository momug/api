const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
app.use(cors());
app.get('/', (req,res) => {
    res.sendFile('index.html',  { root : __dirname});
})
app.get('/todo', (req,res) => {
    res.send('todo list');
})
app.get('/query/:id', (req,res) => {
    res.send(req.params.id);
})
app.get('/index.js', (req,res) => {
    res.sendFile('index.js', { root : __dirname});
})

console.log(`linstening on ${port}`);
app.listen(8080);