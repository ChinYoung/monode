import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';
import Login from './view/login';
import Main from './view/main';
import NotFound from './view/404';

import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import monodeApp from './store/monodeApp';

const actions = {
  setAuthState(authed) {
    return {
      type: 'SET_AUTH_STATUS',
      authed
    }
  }
}

const mapStateToProps = state => {
  return {
    authed: state.authed
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAuthed: authed => {
      dispatch(actions.setAuthState(authed))
    }
  }
}

const AppPage = ({ authed, setAuthed }) => {
  console.log(authed)
  return (
    <Router>
      <Switch>
        <Route path='/404' exact component={ NotFound } />
        <Route 
          path="/login" 
          exact 
          render={
            ({ location }) => authed ? <Redirect to={ location.state && location.state.from ? location.state.from : '/' } /> : <Login setAuthed={ setAuthed } />
          } 
        />
        <PrivateRoute authed={ authed }>
          <Main />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppPage)

const store = createStore(monodeApp)

export default _ => (
  <Provider store={ store }>
    <App />
  </Provider>
)