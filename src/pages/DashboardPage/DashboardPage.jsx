import { Outlet } from 'react-router';
import { Suspense } from 'react';
import HomeTab from 'components/HomeTab/HomeTab';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';

export default function DashboardPage() {
  return (
    <>
      <h1>DashboardPage</h1>
      <HomeTab />
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
