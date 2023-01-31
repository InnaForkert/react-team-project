import { Outlet } from 'react-router';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import { Container, Grid } from 'components/Container/Container.styled';
import { Header } from 'components/Header/Header';
import AddTransactionBtn from 'components/AddTransactionBtn/AddTransactionBtn';
import { useSelector } from 'react-redux';
import { selectModalAddTransactionOpen } from 'redux/global/globalSlice';
import { Modal } from 'components/Modal/Modal';

import { getAllTransactions } from 'redux/transactions/operations';
import Currency from 'components/Currency/Currency';
import { MediaQuery } from 'components/MediaQuery/MediaQuery';
import Balance from 'components/Balance/Balance';
import { Main, LeftColumn, RightColumn } from './DashboardPage.styled';

export default function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);

  const isModalAddTransactionOpen = useSelector(selectModalAddTransactionOpen);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <MediaQuery deviceName={'tillDesktop'}>
            <Grid>
              <Navigation />
              <Balance />
              <MediaQuery deviceName={'tabletFrom'}>
                <Currency />
              </MediaQuery>
            </Grid>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </MediaQuery>
          <MediaQuery deviceName={'desktop'}>
            <Grid>
              <LeftColumn>
                <Navigation />
                <Balance />
                <Currency />
              </LeftColumn>
              <RightColumn>
                <Suspense fallback={<Loader />}>
                  <Outlet />
                </Suspense>
              </RightColumn>
            </Grid>
          </MediaQuery>
        </Container>
      </Main>
      <AddTransactionBtn />
      {isModalAddTransactionOpen && <Modal />}
    </>
  );
}
