import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import { signIn } from 'redux/auth/operations';

import Button from 'components/Button/Button';
import errorToast from 'components/Toasts/error';
import { LoginSchema } from 'services/schema';

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
  Error,
  IconEye,
} from 'components/RegistrationForm/RegistrationForm.styled';

import { BsEyeSlash } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.auth.status);

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: LoginSchema,

    onSubmit: (values, actions) => {
      const { email, password } = values;

      dispatch(signIn({ email, password })).then(resp =>
        resp?.error
          ? errorToast(
              resp.payload instanceof Object ? resp.payload[0] : resp.payload
            )
          : actions.resetForm()
      );
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    loginFormik;

  const { email, password } = values;

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
            disabled={status === 'loading'}
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
            disabled={status === 'loading'}
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
        <Button
          type="submit"
          content={'Log in'}
          hasAccent={true}
          disabled={status === 'loading'}
        />
      </AuthForm>
      <NavLink to="/register">
        <Button
          type="button"
          content={'Register'}
          disabled={status === 'loading'}
        />
      </NavLink>
    </AuthWrapper>
  );
};
