import config from 'config'

let Config
export default {
  getConfig() {
    if (!Config) {
      Config = config
      // do some synchronous actions here to add configurations or to fetch configurations from external resources
      return Config
    }
    return Config
  }
}