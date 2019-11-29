import React from 'react';
import { observer } from 'mobx-react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';
import store from './store';
import Login from './view/login';
import Main from './view/main';
import NotFound from './view/404';

const App = observer(_ => {
  const userStore = store.userStore
  console.log(userStore)
  return (
    <Router>
      <Switch>
        <Route path='/404' exact component={ NotFound } />
        <Route path="/login" exact render={ 
          ({ location }) => {
            console.log(location)
            return userStore.authed ? <Redirect to={ location.state && location.state.from ? location.state.from : '/' } />
              : <Login login={ userStore.login } />
          }
        }
        />
        <PrivateRoute authed={ store.userStore.authed }>
          <Main />
        </PrivateRoute>
      </Switch>
    </Router>
  )
})

export default _ => (
  <App />
)