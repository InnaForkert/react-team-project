import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'redux/auth/operations';

import css from './RegistrationForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
  confirmPassword: '',
  username: '',
};

export const RegistrationForm = () => {
  const selector = useSelector(state => state.auth);
  console.log(selector);
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
  };

  return (
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
          required
        />
      </label>
      <button type="submit" /*disabled={isSubmitting}*/>Register</button>
    </form>
  );
};
