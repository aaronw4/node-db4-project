
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredientName: 'Cereal'},
    {ingredientName: 'Milk'}
  ]);
};
