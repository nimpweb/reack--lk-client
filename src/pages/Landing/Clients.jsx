import React from 'react'
import { NavBar } from '../../components'
import {Link} from 'react-router-dom';
import cn from 'classnames';
import styles from '../../styles/landing.module.css'

export default function LandingClientsPage() {
  return (
    <div className={styles.mainPage}>
      <NavBar>
        <div className={styles.headerBar}>
          <div className={styles.logo}>
            <img className={styles.logoImage} src="/images/webstudio56.png" alt="" />
          </div>
          <div className={styles.headerMenu}>
            <Link to="/" className={styles.headerMenuLink}>
              Главная
            </Link>
            <a href="/projects" className={styles.headerMenuLink}>
              Наши достижения
            </a>
            <a href="/services" className={styles.headerMenuLink}>
              Плюсы
            </a>
            <a href="/news" className={styles.headerMenuLink}>
              Тарифы
            </a>
            <a href="/auth" className={styles.headerMenuLink}>
              Войти
            </a>
          </div>
        </div>
      </NavBar>

      <section className={cn(styles.home)}>
        <div className={styles.sectionTitleBack}>Наши клиенты</div>
        <div className={styles.sectionTitleFore}>Наши клиенты</div>

        <h2>Наши клиенты</h2>
      </section>
    </div>
  )
}
