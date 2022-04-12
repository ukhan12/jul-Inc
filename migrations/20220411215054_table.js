/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Tasks Table
exports.up = function(knex) {
  knex.schema.createTable('Tasks', (table) => {
      table.increments('Task_Id').notNullable();
      table.string('Task').notNullable();
      table.timestamp('Created').notNullable
      table.integer('Severity_Id')
      table.boolean('Completed').defaultTo(false)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Tasks')
};
