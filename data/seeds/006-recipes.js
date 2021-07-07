
exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      recipeName: 'Bowl of Cereal',
      recipeDescription: 'A quick and easy way to start the day.'
    }
  ]);
};
