
exports.seed = function(knex) {
      return knex('steps').insert([
        {
          stepNumber: 1,
          stepDirections: 'Pour cereal into bowl.',
          recipesId: 2
        },
        {
          stepNumber: 2,
          stepDirections: 'Add milk to bowl.',
          recipesId: 2
        }
      ]);
};
