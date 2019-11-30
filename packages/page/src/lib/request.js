import axios from 'axios';
import Config from 'Config';


const request = axios.create({
  baseURL: Config.baseURL
})

request.interceptors.response.use(
  res => {
    if (0 !== res.data.code) {
      return Promise.reject(res)
    }
    return res
  },
  err => {
    console.log(err)
    return Promise.reject(err)
  }
)

export default request