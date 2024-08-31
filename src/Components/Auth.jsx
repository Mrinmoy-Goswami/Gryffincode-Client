import React from 'react';
import { Navigate } from 'react-router-dom';

const Auth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem('user') !== null;

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default Auth;
