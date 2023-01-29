import { Container } from 'components/Container/Container.styled';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

// import css from './RegistrationPage.module.css';

import { Registration, Title } from './Registration.styled';

export default function RegistrationPage() {
  return (
    <Container>
      <Registration>
        <Title>Finance App</Title>
        <RegistrationForm />
      </Registration>
    </Container>
  );
}
