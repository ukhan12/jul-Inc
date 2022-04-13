/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex,Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function (){
    return knex('users').insert([
      {email:"jah@jul.com", password:"nohacking", first_name:"Jah", last_name:"Williams"},
      {email:"uzma@jul.com", password:"nohacking1", first_name:"Uzma", last_name:"Khan"},
      {email:"liam@jul.com", password:"nohacking2", first_name:"Liam", last_name:"Reboseno"}
    ]);
  });
};
