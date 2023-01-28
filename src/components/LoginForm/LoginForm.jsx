import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Icons } from 'components/Icons/Icons';
import { MdEmail, MdLock } from 'react-icons/md';

import { signIn } from 'redux/auth/operations';

import css from './LoginForm.module.css';
import Button from 'components/Button/Button';

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
    <div className={css.loginWrapper}>
      <h2 className={css.formTitle}>
        <Icons name="icon-wallet" size="40" />
        Wallet
      </h2>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <label className={css.inputLabel}>
          <input
            className={css.formInput}
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            required
            placeholder="E-mail"
          />
          <MdEmail className={css.inputIcon} />
        </label>
        <label className={css.inputLabel}>
          <input
            className={css.formInput}
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
        </label>
        <Button type="submit" content={'Log in'} hasAccent={true} />
      </form>
      <NavLink to="/register">
        <Button type="button" content={'Register'} />
      </NavLink>
    </div>
  );
};
