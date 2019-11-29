import axios from 'axios';
import Config from 'Config';
import store from '../store';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';

const userStore = store.userStore

const request = axios.create({
  baseURL: Config.baseURL
})

const Msg = ({status}) => {
  let [open, setOpen] = React.useState(status)
  return (
    <Snackbar
      open={ open }
      autoHideDuration={3000}
      onClose={ _ => setOpen(false) }
      
    >
      <SnackbarContent 
        message="test"
      />
    </Snackbar>
  )
}

request.interceptors.response.use(
  res => {
    return res
  },
  err => {
    userStore.logout()
    ReactDOM.render(<Msg status={true} />, document.getElementById("global"))
  }
)

export default request