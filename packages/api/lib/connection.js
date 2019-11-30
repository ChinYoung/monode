import knex from 'knex';
import config from 'config';

let connection

export default {
  getConnection () {
    if (!connection) {
      connection = knex(config.get('db'))
    }
    return connection
  }
}
