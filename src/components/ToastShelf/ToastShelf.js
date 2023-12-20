import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ ToastList, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {ToastList.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            content={message}
            variant={variant}
            id={id}
            handleDismiss={handleDismiss}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
