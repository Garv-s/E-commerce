/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Sam Bahadur', email: 'sbahadur@gmail.com', password: 'SB@e-commerce'},
    {id: 2, name: 'Amay Patnaik', email: 'apatnaik@gmail.com', password: 'AP@e-commerce'},
    {id: 3, name: 'Vijay Salgaonkar', email: 'vsalgaonkar@gmail.com', password: '2October@e-commerce'}
  ]);
};
