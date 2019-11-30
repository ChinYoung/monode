import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const LoginPage = ({ setAuthed, classes }) => {
  const data = {}
  const handleLogin = _ => {
    setAuthed(true)
  }
  const handleChangeUsername = e => (data.username = e.target.detail)

  const handleChangePassword = e => (data.password = e.target.detail)

  return (
    <div className={ classes.container }>
      <h2>
        Login
      </h2>
      <TextField
        label="Username"
        onChange={ handleChangeUsername }
      />
      <div style={{ height: "1rem" }}></div>
      <TextField
        label="Password"
        type="password"
        onChange={ handleChangePassword }
      />
      <div style={{ height: "2rem" }}></div>
      <Button variant="contained" color="primary" onClick={ handleLogin }>
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