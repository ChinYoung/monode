import React from 'react';
import style from './main.module.scss';
import Store from './store';
import { Button } from '@material-ui/core';
import { logout } from '../../api';
import Toast from 'toast';

export default () => {
  const showToast = _ => {
    console.log("click")
    Toast.info({message: " hello"})
  }

  return (
    <div className={style.container}>
      <Button variant="contained" color="primary" onClick={ showToast }>open</Button>
    </div>
  )
}