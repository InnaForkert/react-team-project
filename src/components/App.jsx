import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { currentUser } from 'redux/auth/operations';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const ProtectedDashboardPage = lazy(() =>
  import('pages/DashboardPage/DashboardPage')
);
const HomeTab = lazy(() => import('./HomeTab/HomeTab'));
const Statistics = lazy(() => import('./Statistics/Statistics'));
const Currency = lazy(() => import('./Currency/Currency'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/" element={<ProtectedDashboardPage />}>
              <Route path="/home" index element={<HomeTab />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="currency" element={<Currency />} />
              {/* Currency for Mobile Version */}
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
