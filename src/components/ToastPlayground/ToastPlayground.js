import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [ToastList, setToastList] = React.useState([]);

  const handleMsgChange = (event) => {
    setMessage(event.target.value);
  }
  const handleVariantChange = (event) => {
    setVariant(event.target.value);
  }

  const handleDismiss = (id) => {
    setToastList(ToastList.filter((toast) => toast.id !== id));
  }

  const handlePopToast = (event) => {
    event.preventDefault();
    setToastList([...ToastList, {
      id: crypto.randomUUID(),
      message,
      variant,
    }]);
  }
  return (
    <form className={styles.wrapper} >
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf ToastList={ToastList} handleDismiss={handleDismiss} />
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" value={message} onChange={handleMsgChange} className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            onChange={handleVariantChange}
          >
            {VARIANT_OPTIONS.map((variant) =>
              <label key={variant} htmlFor={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant} />
                {variant}
              </label>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={handlePopToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
