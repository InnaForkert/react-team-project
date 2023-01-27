import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay, ModalWindow } from './Modal.styled';
import Loader from 'components/Loader/Loader';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImageURL, alt, onImgClick }) {
  const [showSpinner, setShowSpinner] = useState(true);

  const hideSpinner = () => {
    setShowSpinner(false);
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onImgClick('');
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      console.log('keydown', e.code);
      if (e.code === 'Escape') {
        onImgClick('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const largeImage = document.querySelector('#largeImage');
    largeImage.addEventListener('load', hideSpinner);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onImgClick]);

  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      {showSpinner && (
        <div style={{ zIndex: 2, position: 'absolute' }}>
          <Loader />
        </div>
      )}
      <div className={styles.Modal}>
        <img id="largeImage" src={largeImageURL} alt={alt} />
      </div>
    </div>,

    modalRoot
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
