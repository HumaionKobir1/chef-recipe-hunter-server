const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const chefs = require('./data/chefs.json');
const recipes = require('./data/recipe.json');
const categories = require('./data/category.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chef is running')
});

app.get('/chefs', (req, res)=> {
    res.send(chefs);
})

app.get('/recipes', (req, res)=> {
    res.send(recipes);
})

app.get('/categories', (req, res)=> {
    res.send(categories);
})

app.get('/chefs/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const chefsRecipe = recipes.filter(c => parseInt( c.category_id) === id);
    res.send(chefsRecipe);
})

app.get('/recipes/:id', (req, res)=> {
    const id1 = req.params.id;
    const selectedRecipes = recipes.filter(r=> r.id == id1);
    console.log(selectedRecipes)
    res.send(selectedRecipes);
})


app.listen(port, ()=> {
    console.log(`Chef API IS RUNNING ON PORT: ${port}`);
})
