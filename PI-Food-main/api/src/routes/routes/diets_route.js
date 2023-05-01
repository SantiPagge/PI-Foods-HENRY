const { Router } = require('express');
const { showDiets } = require ('../controllers/controllers');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const allDiets = await showDiets();
        res.status(200).send(allDiets);
    } catch (error) {
        res.status(404).send(error);      
    }
})

module.exports = router;