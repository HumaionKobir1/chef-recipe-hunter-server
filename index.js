const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/category.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chef is running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, ()=> {
    console.log(`Chef API IS RUNNING ON PORT: ${port}`);
})
