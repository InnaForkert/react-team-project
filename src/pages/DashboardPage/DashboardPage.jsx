import { Outlet } from 'react-router';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import HomeTab from 'components/HomeTab/HomeTab';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { Container } from 'components/Container/Container.styled';
import { Header } from 'components/Header/Header';
import AddTransactionBtn from 'components/AddTransactionBtn/AddTransactionBtn';
import { useSelector } from 'react-redux';
import { selectModalAddTransactionOpen } from 'redux/global/globalSlice';
import { Modal } from 'components/Modal/Modal';

import { getAllTransactions } from 'redux/transactions/operations';

export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const isModalAddTransactionOpen = useSelector(selectModalAddTransactionOpen);

  return (
    <>
      <Header />
      <Container>
        <Navigation />
        {/* <HomeTab /> */}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <AddTransactionBtn />
      </Container>
      {isModalAddTransactionOpen && <Modal />}
    </>
  );
}
