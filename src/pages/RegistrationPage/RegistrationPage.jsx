import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import { ContainerAuth } from 'components/Container/Container.styled';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import WithAuthRedirect from 'hoc/WithAuthRedirect';

import { Registration, Title } from './Registration.styled';

function RegistrationPage() {
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);

  return (
    !isAuth && (
      <Registration>
        <ContainerAuth>
          <Title>Finance App</Title>
          <RegistrationForm />
        </ContainerAuth>
      </Registration>
    )
  );
}

const ProtectedRegistrationPage = WithAuthRedirect(RegistrationPage, '/home');

export default ProtectedRegistrationPage;
