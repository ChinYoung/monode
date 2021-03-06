import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { login } from './api';
import Toast from 'material-toast';

const LoginPage = ({ setAuthed, classes }) => {
  const data = {}
  const handleLogin = _ => {
    if (!data.username || !data.password) {
      Toast.error({message: '输入用户名和密码'})
      return false
    }
    login(data)
      .then(
        res => {
          if (res.data.token) {
            Toast.success({ message: 'Welcome'})
            setAuthed(true)
          } else {
            Toast.error({ message: res.message })
          }
        },
         err => {
           Toast.warning({ message: 'Login failed' })
         } 
      )
  }
  return (
    <div className={ classes.container }>
      <h2>
        Login
      </h2>
      <TextField
        label='Username'
        onChange={ e => (data.username = e.target.value) }
      />
      <div style={{ height: '1rem' }}></div>
      <TextField
        label='Password'
        type='password'
        onChange={ e => (data.password = e.target.value) }
      />
      <div style={{ height: '2rem' }}></div>
      <Button 
        variant='contained'
        color='primary'
        onClick={ handleLogin }
      >
        Login
      </Button>
    </div>
  )
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    width: '100%'
  }
}

export default withStyles(styles)(LoginPage)