import { Outlet } from 'react-router';
import { Suspense } from 'react';
import HomeTab from 'components/HomeTab/HomeTab';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { Container } from 'components/Container/Container.styled';
import { Header } from 'components/Header/Header';
import AddTransactionBtn from 'components/AddTransactionBtn/AddTransactionBtn';
import { useSelector } from 'react-redux';
import { selectModalAddTransactionOpen } from 'redux/global/globalSlice';
import { Modal } from 'components/Modal/Modal';

export default function DashboardPage() {
  const isModalAddTransactionOpen = useSelector(selectModalAddTransactionOpen);

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
        <AddTransactionBtn />
      </Container>
      {isModalAddTransactionOpen && <Modal />}
    </>
  );
}
