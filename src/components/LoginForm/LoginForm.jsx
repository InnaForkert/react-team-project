import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signIn } from 'redux/auth/operations';

import Button from 'components/Button/Button';
import errorToast from 'components/Toasts/error';

import sprite from 'assets/icons/sprite.svg';
import { LogoIcon } from 'components/Header/Header.styled';
import {
  AuthWrapper,
  Input,
  AuthForm,
  Title,
  Label,
  EmailIcon,
  PasswordIcon,
} from 'components/RegistrationForm/RegistrationForm.styled';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  const [authData, setAuthData] = useState(INITIAL_STATE);
  const { email, password } = authData;

  const handleChange = ({ target }) => {
    setAuthData({ ...authData, [target.name]: target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const resp = await dispatch(signIn({ email, password }));

    if (resp?.error) {
      return errorToast(error);
    }

    setAuthData(INITIAL_STATE);
  };

  return (
    <AuthWrapper>
      <Title>
        <LogoIcon>
          <use href={sprite + '#icon-wallet'}></use>
        </LogoIcon>
        Wallet
      </Title>
      <AuthForm onSubmit={handleSubmit}>
        <Label>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            required
            placeholder="E-mail"
          />
          <EmailIcon />
        </Label>
        <Label>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            minLength="6"
            maxLength="12"
            placeholder="Password"
            required
          />
          <PasswordIcon />
        </Label>
        <Button type="submit" content={'Log in'} hasAccent={true} />
      </AuthForm>
      <NavLink to="/register">
        <Button type="button" content={'Register'} />
      </NavLink>
    </AuthWrapper>
  );
};
