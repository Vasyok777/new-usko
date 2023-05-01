import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const Modal = ({ active, setActive, children }) => {
  if (active) {
    document.body.classList.add('hidden');
  } else {
    document.body.classList.remove('hidden');
  }
  return ReactDOM.createPortal(
    <>
      <div
        className={`${styles.modal} ${active ? styles.active : ''}`}
        onClick={() => setActive(false)}>
        <button className={styles.modal__close} onClick={() => setActive(false)}>
          X
        </button>
        <div
          className={`${styles.modal__content} ${active ? styles.active : ''}`}
          onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('portal'),
  );
};

export default Modal;
