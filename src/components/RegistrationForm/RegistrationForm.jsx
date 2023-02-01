import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import { signUp } from 'redux/auth/operations';

import sprite from 'assets/icons/sprite.svg';
import { LogoIcon } from 'components/Header/Header.styled';
import Button from 'components/Button/Button';
import { Box } from 'components/Box';
import { RegisterSchema } from 'services/schema';

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
  Error,
  IconEye,
} from './RegistrationForm.styled';

import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { useState } from 'react';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const registerFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
    },

    validationSchema: RegisterSchema,

    onSubmit: (values, actions) => {
      const { username, email, password } = values;

      dispatch(signUp({ username, email, password })).then(resp =>
        resp?.error ? errorToast(resp.payload) : actions.resetForm()
      );
    },
  });

  const {
    values,
    isSubmitting,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = registerFormik;
  const { email, password, confirmPassword, username } = values;

  const [type, setType] = useState('password');

  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
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
            onBlur={handleBlur}
            value={email}
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <EmailIcon
            style={{ color: errors.email && touched.email && 'red' }}
          />
          {errors.email && touched.email && <Error>{errors.email}</Error>}
        </Label>
        <Label>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={password}
            id="password"
            type={type}
            name="password"
            placeholder="Password"
          />
          <IconEye>
          <span onClick={handleToggle}>
            {type === 'password' ? (
              <BsEyeSlash size={20} />
            ) : (
              <BsEye size={20} />
            )}
          </span>
        </IconEye>
          <PasswordIcon
            style={{
              color: errors.password && touched.password && 'red',
            }}
          />
          {errors.password && touched.password && (
            <Error>{errors.password}</Error>
          )}
        </Label>
        <Label>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={confirmPassword}
            id="confirmPassword"
            type={type}
            name="confirmPassword"
            placeholder="Confirm password"
          />
          <IconEye>
          <span onClick={handleToggle}>
            {type === 'password' ? (
              <BsEyeSlash size={20} />
            ) : (
              <BsEye size={20} />
            )}
          </span>
        </IconEye>
          <PasswordIcon
            style={{
              color: errors.confirmPassword && touched.confirmPassword && 'red',
            }}
          />
          {confirmPassword.length > 0 && (
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
                width={`${confirmPassword.length * 34.1}px`}
                backgroundColor={
                  errors.password || errors.confirmPassword ? 'red' : '#28ce65'
                }
                height="5px"
              />
            </Box>
          )}
        </Label>
        <Label>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={username}
            id="username"
            type="text"
            name="username"
            placeholder="First name"
          />
          <UserIcon
            style={{
              color: errors.username && touched.username && 'red',
            }}
          />
          {errors.username && touched.username && (
            <Error>{errors.username}</Error>
          )}
        </Label>
        <Button
          style={{ opacity: isSubmitting && 0.35 }}
          type="submit"
          content={'Register'}
          hasAccent={true}
        />
      </AuthForm>
      <NavLink to="/login">
        <Button type="button" content={'Log in'} />
      </NavLink>
    </AuthWrapper>
  );
};
