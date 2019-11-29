import { observable, action } from 'mobx';

const store = observable({
  menuOpened: false
})

store.openMenu = action( _ => (store.menuOpened = true))

export default store