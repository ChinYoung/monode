import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Table from './table';
import Form from './form';
import Header from '../../component/Header';

export default _ => (
  <div style={{ width: '100%', height: '100%'}}>
    <Header />
    <Switch>
      <Route path='/' exact render={ _ => <Redirect to='/table' /> } />
      <Route path='/table' render={ _ => <Table /> } />
      <Route path='/form' exact render={ _ => <Form /> } />
      <Redirect to='/404' />
    </Switch>
  </div>
)