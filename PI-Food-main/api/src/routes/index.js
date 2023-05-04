const { Router } = require('express');
const recipesRoute = require('./routes/recipes_route');
const dietsRoute = require('./routes/diets_route');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use('/recipes', recipesRoute)
mainRouter.use('/diets', dietsRoute)

module.exports = mainRouter;