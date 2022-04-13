/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Tasks Table
exports.up = function(knex) {
  return knex.schema.createTable('tasks', (table) => {
      table.increments('task_id').notNullable();
      table.timestamp('created').notNullable();
      table.integer('severity_id')
      table.boolean('completed').defaultTo(false);
      table.integer('project_id').references('id').inTable('projects').onDelete('cascade');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
