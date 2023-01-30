import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';

import sprite from 'assets/icons/sprite.svg';
import { LogoIcon } from 'components/Header/Header.styled';
import Button from 'components/Button/Button';

import {
  AuthWrapper,
  Input,
  AuthForm,
  Title,
  Label,
  EmailIcon,
  PasswordIcon,
  UserIcon,
} from './RegistrationForm.styled';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  username: '',
};

export const RegistrationForm = () => {
  const [authData, setAuthData] = useState(INITIAL_STATE);
  const { email, password, confirmPassword, username } = authData;

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setAuthData({ ...authData, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ email, password, username }));
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
        <Label>
          <Input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            minLength="6"
            maxLength="12"
            placeholder="Confirm password"
            required
          />
          <PasswordIcon />
        </Label>
        <Label>
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={username}
            minLength="1"
            maxLength="12"
            placeholder="First name"
            required
          />
          <UserIcon />
        </Label>
        <Button type="submit" content={'Register'} hasAccent={true} />
      </AuthForm>
      <NavLink to="/login">
        <Button type="button" content={'Log in'} />
      </NavLink>
    </AuthWrapper>
  );
};
