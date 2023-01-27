import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { Link } from 'react-router-dom';

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
  // const [isSubmitting, setIsSubmitting] = useState(false);
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
      <form className={css.registrationForm} onSubmit={handleSubmit}>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            minLength="6"
            maxLength="12"
            required
          />
        </label>
        <label>
          Confirm password
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            minLength="6"
            maxLength="12"
            required
          />
        </label>
        <label>
          First name
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={username}
            minLength="1"
            maxLength="12"
            required
          />
        </label>
        <button type="submit" /*disabled={isSubmitting}*/>Register</button>
      </form>
      <Link to="/login">Log in</Link>
    </div>
  );
};
