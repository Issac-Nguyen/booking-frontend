import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
    const loginState = useSelector(state => state.authen.login)
    return (
      <Route
        {...rest}
        render={({ location }) =>
        loginState ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;