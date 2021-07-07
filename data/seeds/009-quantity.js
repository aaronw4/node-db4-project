
exports.seed = function(knex) {
  return knex('quantity').insert([
    {
      amountNumber: 2,
      amountUnit: 'cups',
      ingredientsId: '4'
    },
    {
      amountNumber: 1,
      amountUnit: 'cups',
      ingredientsId: '5'
    }
  ]);
};
