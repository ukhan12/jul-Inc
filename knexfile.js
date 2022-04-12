// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'task_managerr',
      user:     'jah',
      password: 'nohacking'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'task_managerr',
      user:     'jah',
      password: 'nohacking'
  },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
 
  production: {
    client: 'postgresql',
  },
    migrations: {
      tableName: 'knex_migrations'
    }

};
