import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ component, redirectTo = '/'}) => {
  const isAuth = useSelector(state => state.auth.isAuth)
  const isRefreshing = useSelector(state => state.auth.isRefreshing)

  const shouldRedirect = !isAuth && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

