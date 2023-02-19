const { Router } = require('express');
const recipesRoute = require('./routes/recipesRoute');
const dietsRoute = require('./routes/dietsRoute');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
recipesRoute.use('/recipes', recipesRoute)
dietsRoute.use('/diets', dietsRoute)

module.exports = mainRouter;
