import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { ContainerAuth } from 'components/Container/Container.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';
import WithAuthRedirect from 'hoc/WithAuthRedirect';

import { Login, Title } from './LoginPage.styled';

function LoginPage() {
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);

  return (
    !isAuth && (
      <Login>
        <ContainerAuth>
          <Title>Finance App</Title>
          <LoginForm />
        </ContainerAuth>
      </Login>
    )
  );
}

const ProtectedLoginPage = WithAuthRedirect(LoginPage, '/home');

export default ProtectedLoginPage;
