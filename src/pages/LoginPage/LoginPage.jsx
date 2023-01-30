import { ContainerAuth } from 'components/Container/Container.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

import { Login, Title } from './LoginPage.styled';

// import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <Login>
      <ContainerAuth>
        <Title>Finance App</Title>
        <LoginForm />
      </ContainerAuth>
    </Login>
  );
}
