import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../../store/ToastProvider';

function ToastShelf() {
  const context = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {context.ToastList?.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            content={message}
            variant={variant}
            id={id}
            handleDismiss={context.handleDismiss}
          />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
