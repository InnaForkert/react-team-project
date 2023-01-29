import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { MdEmail, MdLock } from 'react-icons/md';

import { signIn } from 'redux/auth/operations';

import css from './LoginForm.module.css';
import Button from 'components/Button/Button';

import sprite from 'assets/icons/sprite.svg';
import { LogoIcon } from 'components/Header/Header.styled';

import {
  AuthWrapper,
  Input,
  AuthForm,
  Title,
  Label,
} from 'components/RegistrationForm/RegistrationForm.styled';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [authData, setAuthData] = useState(INITIAL_STATE);
  const { email, password } = authData;
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setAuthData({ ...authData, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
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
          <MdEmail className={css.inputIcon} />
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
          <MdLock className={css.inputIcon} />
        </Label>
        <Button type="submit" content={'Log in'} hasAccent={true} />
      </AuthForm>
      <NavLink to="/register">
        <Button type="button" content={'Register'} />
      </NavLink>
    </AuthWrapper>
  );
};
