const express = require('express');

const recipes = require('./recipesModel');

const router = express.Router();

router.get('/', (req, res) => {
    recipes.find()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get recipes.'
            })
        })
});

module.exports = router;