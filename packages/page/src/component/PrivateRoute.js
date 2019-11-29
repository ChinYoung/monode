import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { cloneElement } from 'react';

const PrivateRoute = ({authed, children, ...rest}) => {
  console.log(authed)
  return (
    <Route 
      {...rest} 
      render={ ({location}) => {
        return authed ? children : <Redirect to={{pathname: "/login", state: {from: location}}} />
      }}
    />
  )
}

export default PrivateRoute