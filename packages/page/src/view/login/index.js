import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom';
import style from './login.module.scss';
import { login } from '../../api';
import { observer } from 'mobx-react';

export default observer(({ location, userStore }) => {
  console.log(location)
  const data = {}
  const handleLogin = _ => {
    console.log("login")
    login().then(res => {
      const resData = res.data
      resData && resData.code === 0 && resData.data && userStore.login(res.data)
    })

  }
  const handleChangeUsername = e => {
    data.username = e.target.detail
  }
  const handleChangePassword = e => {
    data.password = e.target.detail
  }
  const LoginPage = _ => (
    <div className={ style.container }>
      <h2>
        Login
      </h2>
      <TextField
        label="Username"
        onChange={ handleChangeUsername }
      />
      <div style={{height: "1rem"}}></div>
      <TextField
        label="Password"
        type="password"
        onChange={ handleChangePassword }
      />
      <div style={{height: "2rem"}}></div>
      <Button variant="contained" color="primary" onClick={ handleLogin }>
        Login
      </Button>
    </div>
  )
  return userStore.authed ? <Redirect to={ location.state && location.state.from ? location.state.from : "/" } /> : <LoginPage />
})