import axios from 'axios';
import Config from 'Config';
import store from '../store/monodeApp';
import Toast from 'toast';

const request = axios.create({
  baseURL: Config.baseURL
})

request.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers = {
        authorization: 'monode ' + token
      }
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)


request.interceptors.response.use(
  response => {
    const res = response.data
    // other error code here
    if (0 !== res.code) {
      return Promise.reject(new Error(res.message || 'Unknown error'))
    }
    return res
  },
  err => {
    const res = err.response
    // jwt authorization failed, reset auth status, and clear local cache if used
    const resetAuthStatus = _ => ({ type: 'SET_AUTH_STATUS', authed: false })
    if (403 === res.status && 69403 === res.data.code) {
      Toast.error({ message: 'Authorization failed' })
      store.dispatch(resetAuthStatus())
    }
    return Promise.reject(res.data)
  }
)

// mount on window/global, to avoid doing import everywhere, as an "Atom" style structure the project has been used
//about the "Atom": api spread in the module/view where it is being used, instead of gathered to a single module
window.REQUEST = request