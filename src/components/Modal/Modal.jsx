import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toggleModalAddTransactionOpen } from 'redux/global/globalSlice';

import { AddTransactionForm } from 'components/AddTransactionForm/AddTransactionForm';

import { ModalWindow, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ type, handleClick, hasAccent }) => {
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(toggleModalAddTransactionOpen());
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
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
