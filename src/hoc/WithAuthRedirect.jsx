import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const WithAuthRedirect = (Component, navigateTo) => {
  const ProtectedComponent = props => {
    const isAuth = useSelector(state => state.auth.isAuth);

    return isAuth ? <Component {...props} /> : <Navigate to={navigateTo} />;
  };

  return ProtectedComponent;
};

export default WithAuthRedirect;
