const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/category.json');
const chefData = require('./data/data.json');


app.use(cors())

app.get('/', (req, res) => {
    res.send('Chef is running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/chefs', (req, res) => {
    res.send(chefData);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChefs = chefData.find(c => c.id == id);
    res.send(selectedChefs);
})

app.listen(port, ()=> {
    console.log(`Chef API IS RUNNING ON PORT: ${port}`);
})
