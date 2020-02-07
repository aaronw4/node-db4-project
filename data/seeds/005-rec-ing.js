
exports.seed = function(knex) {
  return knex('table_name').insert([
    {recipeId: 1, ingredientId: 1},
    {recipeId: 1, ingredientId: 2},
    {recipeId: 1, ingredientId: 3}
  ]);
};
