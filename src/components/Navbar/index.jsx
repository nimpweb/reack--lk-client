import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css';

export default function Navbar({children, ...props}) {

  const [classes, setClasses] = useState([styles.navbar]);
  const handleScroll = () => {
    const newClasses = [styles.navbar];
    if (window.scrollY > 0) { newClasses.push(styles.moved) }
    if (window.scrollY > 10) { newClasses.push(styles.sticky); }
    setClasses(prev => ([...newClasses]));
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={classes.join(' ')}>
      <div className={styles.navbarContent}>
        {children}
      </div>
    </div>
  )
}
