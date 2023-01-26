import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import HomeTab from 'components/HomeTab/HomeTab';

export default function DashboardPage() {
  return (
    <>
      <h1>DashboardPage</h1>
      <HomeTab />
      <Link to="home">home</Link>
      <br />
      <Link to="diagram">diagram</Link>
      <br />
      <Link to="currency">currency for mobile version</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
