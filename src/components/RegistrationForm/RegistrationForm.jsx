import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';

import sprite from 'assets/icons/sprite.svg';
import { LogoIcon } from 'components/Header/Header.styled';
import Button from 'components/Button/Button';
import { Box } from 'components/Box';

import errorToast from 'components/Toasts/error';

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
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState(INITIAL_STATE);
  const { email, password, confirmPassword, username } = authData;
  const error = useSelector(state => state.auth.error);

  const checkPassword = () => {
    return JSON.stringify(password) !== JSON.stringify(confirmPassword);
  };

  const handleChange = ({ target }) => {
    setAuthData({ ...authData, [target.name]: target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (password.length < 6)
      return errorToast('Password length should be at least 6 symbols');
    if (!checkPassword()) {
      return errorToast('Passwords do not match!');
    }

    const resp = await dispatch(signUp({ username, email, password }));

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
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="E-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <EmailIcon />
        </Label>
        <Label>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
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
            value={confirmPassword}
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            minLength="6"
            maxLength="12"
            required
          />
          <PasswordIcon />
          {password.length > 0 && (
            <Box
              position="absolute"
              bottom="-8px"
              width="409.5px"
              overflow="hidden"
              backgroundColor="#e5f1e9"
              height="4px"
              borderRadius="2px"
            >
              <Box
                width={`${password.length * 34.1}px`}
                backgroundColor={checkPassword() ? '#28ce65' : '#e6ed17'}
                height="5px"
              />
            </Box>
          )}
        </Label>
        <Label>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            value={username}
            minLength="1"
            maxLength="12"
            placeholder="First name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
