import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

import { ToastContext } from '../../store/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);

  const textareaRef = React.useRef();

  const context = React.useContext(ToastContext);

  const handleMsgChange = (event) => {
    setMessage(event.target.value);
  }
  const handleVariantChange = (event) => {
    setVariant(event.target.value);
  }
  const handlePopToast = (event) => {
    event.preventDefault();
    context.createToast(message, variant);
    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
    textareaRef.current.focus();
  }
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        context.dismissAll();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  return (
    <div className={styles.wrapper} >
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form className={styles.controlsWrapper} onSubmit={handlePopToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea ref={textareaRef} id="message" value={message} onChange={handleMsgChange} className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((value) =>
              <label key={value} htmlFor={`value-${value}`}>
                <input
                  id={`value-${value}`}
                  type="radio"
                  name="variant"
                  checked={variant === value}
                  value={value}
                  onChange={handleVariantChange}
                />
                {value}
              </label>
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
