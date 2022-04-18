// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'task_managerr',
      user:     'liam',
      password: 'password'
    }
  },
   production: {
    client: 'postgresql',
  },
    migrations: {
      tableName: 'knex_migrations'
    },

};
