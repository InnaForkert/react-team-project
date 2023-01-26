import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage/RegistrationPage')
);
const DashboardPage = lazy(() => import('pages/DashboardPage/DashboardPage'));
const HomeTab = lazy(() => import('./HomeTab/HomeTab'));
const DiagramTab = lazy(() => import('./DiagramTab/DiagramTab'));
const Currency = lazy(() => import('./Currency/Currency'));

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/login">login</Link>
        <br />
        <Link to="/register">register</Link>
        <br />
        <Link to="/home">dashboard</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />

          <Route path="/" element={<DashboardPage />}>
            <Route path="/home" index element={<HomeTab />} />
            <Route path="diagram" element={<DiagramTab />} />
            <Route path="currency" element={<Currency />} />
            {/* Currency for Mobile Version */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
