import { Link } from 'react-router-dom';
import { NavBar } from '../../components';
import styles from '../../styles/landing.module.css';
import ReactDOM from 'react-dom'

export default function ( {refsItems = []} ) {

  const scrollToBlock = (ref) => window.scrollTo(0, ref.current.offsetTop-80);


  return (
    <NavBar>
      <div className={styles.headerBar}>
        <div className={styles.logo}>
          <img className={styles.logoImage} src="/images/webstudio56.png" alt="" />
        </div>
        <div className={styles.headerMenu}>
          { refsItems && refsItems.map( (item, index) => (
            <span className={styles.headerMenuLink} onClick={() => scrollToBlock(item.ref)}>
              {item.title}
            </span>
          )) }
          
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

