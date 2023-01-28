import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';

import { MdEmail, MdLock, MdAccountBox } from 'react-icons/md';
import { Icons } from 'components/Icons/Icons';
import Button from 'components/Button/Button';

import css from './RegistrationForm.module.css';

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
    <div className={css.registrationWrapper}>
      <h2 className={css.formTitle}>
        <Icons name="icon-wallet" size="40" />
        Wallet
      </h2>
      <form className={css.registrationForm} onSubmit={handleSubmit}>
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
        <label className={css.inputLabel}>
          <input
            className={css.formInput}
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            minLength="6"
            maxLength="12"
            placeholder="Confirm password"
            required
          />
          <MdLock className={css.inputIcon} />
        </label>
        <label className={css.inputLabel}>
          <input
            className={css.formInput}
            type="text"
            name="username"
            onChange={handleChange}
            value={username}
            minLength="1"
            maxLength="12"
            placeholder="First name"
            required
          />
          <MdAccountBox className={css.inputIcon} />
        </label>
        <Button type="submit" content={'Register'} hasAccent={true} />
      </form>
      <NavLink to="/login">
        <Button type="button" content={'Log in'} />
      </NavLink>
    </div>
  );
};
