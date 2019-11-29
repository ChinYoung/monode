import React from 'react';
import { observer } from 'mobx-react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';
import store from './store';
import Login from './view/login';
import Main from './view/main';
import { SnackbarProvider } from 'notistack';

const App = observer(_ => {
  const userStore = store.userStore
  return (
    <Router>
      <Switch>
        <Route path="/login" exact render={ ({location}) => (<Login location={location} userStore={userStore} />)} />
        <PrivateRoute authed={store.userStore.authed}>
          <Route path="/" exact render={ _ => (<Redirect to={{pathname: "/main"}} />)} />
          <Route path="/main" exact render={ _ => (<Main />)} />
        </PrivateRoute>
      </Switch>
    </Router>
  )
})

export default _ => (
  <SnackbarProvider maxSnack={5}>
    <App />
  </SnackbarProvider>
)