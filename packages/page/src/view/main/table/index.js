import React from 'react';
import { withStyles } from '@material-ui/styles';
import { getList } from './api';
import { Button } from '@material-ui/core';

const tableStyle = {
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
}

const Table = ({ classes }) => {
  const queryData = _ => {
    getList()

  }
  return (
    <div className={ classes.tableContainer }>
      <Button variant='contained' color='primary' onClick={ queryData }>Mock Auth Error</Button>
    </div>
  )
}

export default withStyles(tableStyle)(Table)