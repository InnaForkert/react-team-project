import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { signOut } from 'redux/auth/operations';
import { toggleModalLogoutOpen } from 'redux/global/globalSlice';
import { ModalWindow, Overlay, Box, Text } from './ModalLogout.styled';
import Button from 'components/Button/Button';

const modalRoot = document.querySelector('#modal-root');

export const ModalLogout = ({ type, handleClick, hasAccent }) => {
  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(toggleModalLogoutOpen());
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(toggleModalLogoutOpen());
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
        <Box>
          <Text>Are you sure you want to leave?</Text>
          <Button
            content={'Yes'}
            hasAccent={true}
            type="button"
            onClick={() => {
              dispatch(toggleModalLogoutOpen());
              dispatch(signOut());
            }}
          />
          <Button
            content={'No'}
            type="button"
            onClick={() => {
              dispatch(toggleModalLogoutOpen());
            }}
          />
        </Box>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};
