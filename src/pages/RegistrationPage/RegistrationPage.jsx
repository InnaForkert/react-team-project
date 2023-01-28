import { Container } from 'components/Container/Container.styled';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <Container>
      <main className={css.registrationPage}>
        <h1 className={css.pageTitle}>Finance App</h1>
        <RegistrationForm />
      </main>
    </Container>
  );
}
