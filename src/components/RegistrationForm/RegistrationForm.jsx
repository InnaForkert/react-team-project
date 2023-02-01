import { useDispatch, useSelector } from 'react-redux';
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
  PassBox,
} from './RegistrationForm.styled';
import { useEffect, useState } from 'react';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.auth.status);
  const [passStrength, setPassStrength] = useState(['33%', 'red']);

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
        resp?.error
          ? errorToast(resp.payload?.[0] || resp.payload)
          : actions.resetForm()
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

  useEffect(() => {
    if (
      password.match(
        /^(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/
      )
    ) {
      setPassStrength(['100%', '#28ce65']);
    } else if (
      password.match(/^(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,}).{1,}$/) ||
      password.match(
        /^(?=(.*[A-Z]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{1,}$/
      ) ||
      password.match(/^(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{1,}$/)
    ) {
      setPassStrength(['66%', 'yellow']);
    } else {
      setPassStrength(['33%', 'red']);
    }
  }, [password]);

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
            disabled={status === 'loading'}
          />
          <EmailIcon
            style={{
              color: errors.email && touched.email && 'red',
            }}
          />
          {errors.email && touched.email && <Error>{errors.email}</Error>}
        </Label>
        <Label>
          <Input
            onChange={handleChange}
            onBlur={handleBlur}
            value={password}
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            disabled={status === 'loading'}
          />
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
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            disabled={status === 'loading'}
          />
          <PasswordIcon
            style={{
              color: errors.confirmPassword && touched.confirmPassword && 'red',
            }}
          />
          {password.length > 0 && (
            <Box
              position="absolute"
              bottom="-8px"
              width="100%"
              overflow="hidden"
              backgroundColor="#e5f1e9"
              height="4px"
              borderRadius="2px"
            >
              <PassBox
                width={passStrength[0]}
                color={passStrength[1]}
                height="5px"
                data-name="dfd"
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
            disabled={status === 'loading'}
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
          disabled={status === 'loading'}
        />
      </AuthForm>
      <NavLink to="/login">
        <Button
          type="button"
          content={'Log in'}
          disabled={status === 'loading'}
        />
      </NavLink>
    </AuthWrapper>
  );
};
