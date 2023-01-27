import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/operations';

import css from './LoginForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [authData, setAuthData] = useState(INITIAL_STATE);
  const { email, password } = authData;
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setAuthData({ ...authData, [target.name]: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
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
      <button type="submit" /*disabled={isSubmitting}*/>Log in</button>
    </form>
  );
};
