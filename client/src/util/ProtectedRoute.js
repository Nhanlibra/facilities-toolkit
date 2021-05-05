import React from 'react';
import {useAuth} from '../hooks/useAuth';
import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {
  const {user} = useAuth();

  return (
    <Route {...rest} render={(props) => (
      user ? <Component {...props} /> : <Redirect to={{pathname: '/login'}} />
    )} />
  );
};

export default ProtectedRoute;
