import { Link } from 'react-router-dom';
import { NavBar } from '../../components';
import styles from './landing.module.css';

export default function () {
  return (
    <NavBar>
      <div className={styles.headerBar}>
        <div className={styles.logo}>
          <img className={styles.logoImage} src="/images/webstudio56.png" alt="" />
        </div>
        <div className={styles.headerMenu}>
          <Link to="/" className={styles.headerMenuLink}>
            Главная
          </Link>
          <Link to="/projects" className={styles.headerMenuLink}>
            Наши достижения
          </Link>
          <Link to="/services" className={styles.headerMenuLink}>
            Плюсы
          </Link>
          <Link to="/news" className={styles.headerMenuLink}>
            Тарифы
          </Link>
          <Link to="/auth" className={styles.headerMenuLink}>
            Войти
          </Link>
        </div>
      </div>
    </NavBar>
  )
}

