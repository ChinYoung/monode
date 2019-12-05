import React from 'react';
import { withStyles } from '@material-ui/styles';
import { getList } from './api';
import { Button } from '@material-ui/core';
import { Route, useRouteMatch, Redirect, Switch } from 'react-router-dom';
import TableChild from './tableChild';

const tableStyle = {
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
}

const Table = ({ classes }) => {
  const match = useRouteMatch()
  const queryData = _ => {
    getList()
  }
  console.log(match)
  return (
    <div className={ classes.tableContainer }>
      <Button variant='contained' color='primary' onClick={ queryData }>Mock Auth Error</Button>
      <Switch>
        <Route path={ `${match.url}/child` } exact component={ TableChild } />
      </Switch>
    </div>
  )
}

export default withStyles(tableStyle)(Table)