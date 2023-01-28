import { Outlet } from 'react-router';
import { Suspense } from 'react';
import HomeTab from 'components/HomeTab/HomeTab';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { Container } from 'components/Container/Container.styled';
import { Header } from 'components/Header/Header';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <Container>
        <h1>DashboardPage</h1>
        <HomeTab />
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
