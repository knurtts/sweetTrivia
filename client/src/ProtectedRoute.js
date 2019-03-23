import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, authenticated, ...rest, }) => {
  return <Route render={(props) => (authenticated ? <Component {...props} /> : <Redirect to="/login" />)} {...rest} />;
};

export default ProtectedRoute;
