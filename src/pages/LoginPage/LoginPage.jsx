import { Container } from 'components/Container/Container.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <Container>
      <main className={css.loginPage}>
        <h1 className={css.pageTitle}>Finance App</h1>
        <LoginForm />
      </main>
    </Container>
  );
}
