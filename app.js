const express = require('express');
const app = express();
const port = 3000;
const foods = require('./food.js');

app.get('/', (req, res) => {
    res.send('Server del mio blog');
})

app.listen(port, () => {
    console.log('Sono un server attivo sulla porta ' + port);
})


app.get('/bacheca', (req, res) => {
    res.json(foods);
})

app.use(express.static('public'));