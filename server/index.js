const express = require('express');
const ctrl = require('./controller')
var app = express();
var axios = require('axios');

app.use(express.json());

app.get('/api/poems', ctrl.getPoems) 
app.get('/api/poems2', async (req, res) => {
    const poems = await axios.get('https://www.poemist.com/api/v1/randompoems');
    res.send(poems.data);
})

app.listen(4000, () => console.log('Now browse to localhost:4000'))