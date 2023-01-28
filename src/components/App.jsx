import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { currentUser } from 'redux/auth/operations';
import { getAllTransactions } from 'redux/transactions/operations';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const HomeTab = lazy(() => import('./HomeTab/HomeTabDesktop/HomeTabDesktop'));
const Statistics = lazy(() => import('./Statistics/Statistics'));
const Currency = lazy(() => import('./Currency/Currency'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <>
      <nav>
        <Link to="/login">login</Link>
        <br />
        <Link to="/register">register</Link>
        <br />
        <Link to="/home">dashboard</Link>
      </nav>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/" element={<DashboardPage />}>
            <Route path="/home" index element={<HomeTab />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="currency" element={<Currency />} />
            {/* Currency for Mobile Version */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
