/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

}

export default exports;