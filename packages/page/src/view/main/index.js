import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export default ({ match }) => {
  return (
    <Switch>
      <Route path='/' exact render={ _ => <Redirect to='/table' /> } />
      <Route path='/table' exact render={ _ => (<div>table</div>) } />
      <Redirect to='/404' />
    </Switch>
  )
}