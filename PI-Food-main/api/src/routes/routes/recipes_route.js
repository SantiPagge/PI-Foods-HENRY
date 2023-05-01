const { Router } = require('express');
const { queryRecipe, recipeId, postRecipe } = require('../controllers/controllers');

const recipesRoute = Router();

<<<<<<< HEAD:PI-Food-main/api/src/routes/routes/recipes_route.js

router.get('/', async (req, res) => {
=======
recipesRoute.get('/', async (req, res) => {
>>>>>>> 70f6b35df33f3779cda6b06c75e7898cd09615ba:PI-Food-main/api/src/routes/routes/recipesRoute.js
    const { name } = req.query;
    try {
        if(name){
            const show = await queryRecipe(name)
            res.status(200).send(show);
        } else {
            const all = await queryRecipe();
            res.status(200).send(all)
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

recipesRoute.post('/', async (req, res) => {
  try {
    const objRecipe = req.body;

    const newRecipe = await postRecipe(objRecipe);

    res.status(201).send(newRecipe);
  } catch (error) {
    res.status(404).send(error);
  }
});

recipesRoute.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const idReceta = await recipeId(id);
        res.status(200).json(idReceta);
    } catch (error) {
        res.status(404).json(error.message);
    }
});

module.exports = recipesRoute;