
exports.seed = function(knex) {
  return knex('recipes-ingredients').insert([
    {recipesId: 2, ingredientsId: 4},
    {recipesId: 2, ingredientsId: 5}
  ]);
};
