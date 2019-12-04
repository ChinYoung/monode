import { combineReducers, createStore } from 'redux';



const authed = (state=false, action) => {
  switch (action.type) {
    case 'SET_AUTH_STATUS':
      return action.authed
    default:
      return state
  }
}

const App = combineReducers({
  authed
})

// export store instance instead of template, for the direct usage in utils
export default createStore(App)