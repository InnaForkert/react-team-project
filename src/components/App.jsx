import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { currentUser } from 'redux/auth/operations';

import Loader from './Loader/Loader';
import { ProtectedRoute } from './ProtectedRoute';

const ProtectedLoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ProtectedRegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const HomeTab = lazy(() => import('./HomeTab/HomeTab'));
const Statistics = lazy(() => import('./Statistics/Statistics'));
const Currency = lazy(() => import('./Currency/Currency'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const token = useSelector(state => state.auth.token);
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    if (!isAuth && token) {
      dispatch(currentUser());
    }
  }, [dispatch, token, isAuth]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/login" element={<ProtectedLoginPage />} />
            <Route path="/register" element={<ProtectedRegistrationPage />} />
            <Route
              path="/"
              element={
                <ProtectedRoute
                  redirectTo="/login"
                  component={<DashboardPage />}
                />
              }
            >
              <Route path="/home" index element={<HomeTab />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="currency" element={<Currency />} />
              {/* Currency for Mobile Version */}
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </Routes>
        </Suspense>
      )}
      <ToastContainer />
    </>
  );
};
