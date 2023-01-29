import { Outlet } from 'react-router';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import HomeTab from 'components/HomeTab/HomeTab';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { Container } from 'components/Container/Container.styled';
import AddTransactionBtn from 'components/AddTransactionBtn/AddTransactionBtn';

import { getAllTransactions } from 'redux/transactions/operations';

export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>DashboardPage</h1>
        <HomeTab />
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <AddTransactionBtn
          type="button"
          content={'+'}
          hasAccent={true}
          // handleClick={onAddTransactionBtnClick}
        />
      </Container>
    </>
  );
}
