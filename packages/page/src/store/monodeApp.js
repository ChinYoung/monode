import { combineReducers } from 'redux';


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

export default App