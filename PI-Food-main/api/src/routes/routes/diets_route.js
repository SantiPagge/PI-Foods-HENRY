const { Router } = require('express');
const { showDiets } = require ('../controllers/controllers');

const dietsRoute = Router();

dietsRoute.get('/', async (req, res) => {
    try {
        const allDiets = await showDiets();
        res.status(200).send(allDiets);
    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports = dietsRoute;