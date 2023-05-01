const { Router } = require('express');
const recipes = require('./routes/recipes_route');
const diets = require('./routes/diets_route');
const Recipe = require('../models/Recipe');
const Diets = require('../models/Diets');
const { searchInApi, searchInDb, dbApi, queryRecipe, recipeId, showDiets, postRecipe } = require('../routes/controllers/controllers')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/recipes', async (req, res) => {
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

router.post('/recipes', async (req, res) => {
  try {
    const objRecipe = req.body;

    if(!objRecipe) res.status(404).send('Missing info.');

    const newRecipe = await postRecipe();

    res.status(201).send(newRecipe);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get('/recipes', async (req, res) => {
    const { idRecipe } = req.params;
    try {
        const idReceta = await recipeId(idRecipe);
        res.status(200).json(idReceta);
    } catch (error) {
        res.status(404).send(error);
    }
});

router.put('/recipes/:id', async (req, res) => {
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


router.get('/diets', async (req, res) => {
    try {
        const allDiets = await showDiets();
        res.status(200).send(allDiets);
    } catch (error) {
        res.status(404).send(error);      
    }
})
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// router.use('/recipes', recipes)
// router.use('/diets', diets)

module.exports = router;
