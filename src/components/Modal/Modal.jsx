import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
// import { signOut } from 'redux/auth/operations';
import {
  toggleModalAddTransactionOpen,
  // toggleModalLogoutOpen,
} from 'redux/global/globalSlice';

import { AddTransactionForm } from 'components/AddTransactionForm/AddTransactionForm';

import {
  ModalWindow,
  Overlay,
  // Box, Text
} from './Modal.styled';
// import Button from 'components/Button/Button';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ type, handleClick, hasAccent }) => {
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      // dispatch(toggleModalLogoutOpen());
      dispatch(toggleModalAddTransactionOpen());
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        // dispatch(toggleModalLogoutOpen());
        dispatch(toggleModalAddTransactionOpen());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <AddTransactionForm />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
