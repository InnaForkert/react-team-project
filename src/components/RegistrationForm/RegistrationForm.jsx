import css from './RegistrationForm.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';

import sprite from 'assets/icons/sprite.svg';
import { LogoIcon } from 'components/Header/Header.styled';
import Button from 'components/Button/Button';
import { Box } from 'components/Box';

import { MdEmail, MdLock, MdAccountBox } from 'react-icons/md';
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

// const INITIAL_STATE = {
//   email: '',
//   password: '',
//   confirmPassword: '',
//   username: '',
// };

// export const RegistrationForm = () => {
// const [authData, setAuthData] = useState(INITIAL_STATE);
// const { email, password, confirmPassword, username } = authData;

const RegistrationForm = () => {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const dispatch = useDispatch();
  dispatch(signUp());

  const checkPassword = () => {
    if (JSON.stringify(password) !== JSON.stringify(passwordConfirm)) {
      return false;
    }
    return true;
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangePassword1 = e => {
    setPasswordConfirm(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const checked = checkPassword();
    if (passwordConfirm.length < 6)
      return errorToast('Password must be length more 6 symbols');
    if (!checked) {
      return errorToast('Passwords do not match!');
    }
    const form = e.currentTarget;
    const res = dispatch(
      signUp({
        username: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    if (res.payload === 409) return errorToast('This user is registered');
    form.reset();
  };

  return (
    <AuthWrapper>
      <Title>
        <LogoIcon>
          <use href={sprite + '#icon-wallet'}></use>
        </LogoIcon>
        Wallet
      </Title>
      <AuthForm onSubmit={onSubmit}>
        <Label>
          <Input
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
            onChange={onChangePassword1}
            type="password"
            name="password"
            placeholder="Password"
            value={passwordConfirm}
          />
          <PasswordIcon />
        </Label>
        <Label>
          <Input
            value={password}
            onChange={onChangePassword}
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm password"
          />
          {/* <PasswordIcon /> */}
          {password.length > 0 && (
            <Box
              maxWidth="180px"
              overflow="hidden"
              backgroundColor="#e5f1e9"
              mt="5px"
              borderRadius="20px"
            >
              <Box
                width={`${password.length * 30}px`}
                backgroundColor={checkPassword() ? '#28ce65' : '#e6ed17'}
                height="5px"
              />
            </Box>
          )}
          <MdLock className={css.inputIcon} />
        </Label>
        <Label>
          <Input
            type="text"
            name="name"
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

export default RegistrationForm;
