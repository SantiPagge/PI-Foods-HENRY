const { Router } = require('express');
const { queryRecipe, recipeId, postRecipe } = require('../controllers/controllers');
const { Recipe, Diets } = require('../../db');

const recipesRoute = Router();

recipesRoute.get('/', async (req, res) => {
    const { name } = req.query;
    try {
        if(name){
            const show = await queryRecipe(name)
            res.status(200).json(show);
        } else {
            const all = await queryRecipe();
            res.status(200).json(all)
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

recipesRoute.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, summary, steps, healthScore, diets, image } = req.body;
    try {
        const recipe = await Recipe.findByPk(id);
        if(!recipe) {
            return res.status(404).json({error: 'Recipe not found'});
        }

        await Recipe.update(
            {
                name: name,
                summary: summary,
                image: image,
                steps: steps,
                healthScore: healthScore
            },
            {
                where: {
                    id: id
                },
            }
        );
        if (diets.length) {
            await recipe.setDiets([]);
            diets.forEach(async (element) => {
                const diet = await Diets.findOne({
                    where: {
                        name: element,
                    }
                });
                if(diet) {
                    await recipe.addDiet(diet);
                }
            });
        }

        //Obtener la instancia actualizada de la receta
        const updatedRecipe = await Recipe.findByPk(id, {
            include: [{ model: Diets }],
        });
        return res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(404).json({ error: error.message });      
    }
});

module.exports = recipesRoute;