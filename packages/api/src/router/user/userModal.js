import DB from '../../../lib/connection';

class User {
  constructor () {
    this.conn = DB.getConnection()
  }

  getUser(username, password) {
    return this.conn('user').where({ username, password })
  }

}

export default new User()