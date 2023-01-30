import { ContainerAuth } from 'components/Container/Container.styled';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
// import { Container } from 'components/Container/Container.styled';

// import css from './RegistrationPage.module.css';

import { Registration, Title } from './Registration.styled';

export default function RegistrationPage() {
  return (
    <Registration>
      <ContainerAuth>
        <Title>Finance App</Title>
        <RegistrationForm />
      </ContainerAuth>
    </Registration>
  );
}
