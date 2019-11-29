import { extendObservable, action } from 'mobx';


class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore
    extendObservable(this, {
      authed: false
    })
  }

  login = data => {
    const self = this
    action(_ => (self.authed = true))()
  }

  logout = _ => {
    action(_ => (this.authed = false))()
  }
}


export default UserStore