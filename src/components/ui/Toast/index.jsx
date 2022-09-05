import React, {useEffect, useState} from 'react'
import cn from 'classnames';
import styles from './toast.module.css'

export default function Toast({ theme = 'warning', message, autoHide = true, autoHideInterval = 3000, onClose }) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 10);

    if (autoHide) {
      setTimeout(() => {
        handleClose();
      }, autoHideInterval);
    }
  });

  const handleClose = () => {
    setIsActive(false);
    setTimeout(() => {
      onClose();
    }, 600);
  }

  return (
    <div className={cn(styles.toast, { [styles.active]: isActive } )}  style={{top: window.pageYOffset + 70}} onClick={handleClose}>
      <div className={cn(styles.toastBody, styles[theme])}>
        {message}
        <span className={styles.closeButton} onClick={handleClose}>&times;</span>
      </div>
    </div>
  )
}
