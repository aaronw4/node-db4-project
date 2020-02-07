const express = require('express');

const recipes = require('./recipesModel');

const router = express.Router();

router.get('/', (req, res) => {
    recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get recipes.'
            })
        })
});

router.get('/:id/shoppingList', (req, res) => {
    const {id} = req.params;

    recipes.getShoppingList(id)
        .then(list => {
            if (list.length) {
                res.status(200).json(list);
            } else {
                res.status(404).json({
                    error: 'Could not find list for given recipe.'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get ingredients.'
            })
            console.log(err)
        })
})

module.exports = router;