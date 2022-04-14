/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// Tasks Table
exports.up = function(knex) {
  return knex.schema.createTable('tasks', (table) => {
      table.increments('task_id').nullable;
      table.timestamp('created').defaultTo(knex.fn.now());
      table.integer('severity_id').nullable()
      table.boolean('completed').defaultTo(false);
      table.integer('project_id').references('id').inTable('projects').onDelete('cascade');
      table.string('task').notNullable()
  })
};   

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
