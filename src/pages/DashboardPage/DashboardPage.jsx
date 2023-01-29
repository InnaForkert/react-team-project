import { Outlet } from 'react-router';
import { Suspense } from 'react';
import HomeTab from 'components/HomeTab/HomeTab';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { Container } from 'components/Container/Container.styled';
import { Header } from 'components/Header/Header';
import AddTransactionBtn from 'components/AddTransactionBtn/AddTransactionBtn';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleModalAddTransactionOpen,
  selectModalAddTransactionOpen,
} from 'redux/global/globalSlice';
import { Modal } from 'components/Modal/Modal';
// import { AddTransactionForm } from 'components/AddTransactionForm/AddTransactionForm';

export default function DashboardPage() {
  const dispatch = useDispatch();

  const isModalAddTransactionOpen = useSelector(selectModalAddTransactionOpen);

  const handleModalAddTransactionOpen = () => {
    dispatch(toggleModalAddTransactionOpen());
  };

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
        <AddTransactionBtn
          type="button"
          content={'+'}
          hasAccent={true}
          onClick={handleModalAddTransactionOpen}
        />
        {/* <AddTransactionForm /> */}
      </Container>
      {isModalAddTransactionOpen && <Modal />}
    </>
  );
}
