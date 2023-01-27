import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

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
  // const [isSubmitting, setIsSubmitting] = useState(false);
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
            minLength="6"
            maxLength="12"
            required
          />
        </label>
        <Button
          type="submit"
          content={'Log in'}
          hasAccent={true}
          /*disabled={isSubmitting}*/
        />
      </form>
      <NavLink to="/register">
        <Button type="button" content={'Register'} />
      </NavLink>
    </div>
  );
};
