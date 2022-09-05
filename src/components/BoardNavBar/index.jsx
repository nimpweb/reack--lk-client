import React from 'react'
import Navbar from '../Navbar';
import {Link, useHistory} from 'react-router-dom';
import { ArticleOutlined, ReadMore} from '@mui/icons-material';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import styles from './boardnavbar.module.css';
import Button from './../ui/Button/index';

export default function BoardNavBar() {
  const history = useHistory();
  const { currentUser } = useSelector(store => store.user);

  const instructionHref = '/instruction?page=client';
  return (
    <Navbar>
      <div className={styles.headerBar}>
        <div className={styles.logo}>
          <Link to="https://webstudio56.ru"><img className={styles.logoImage} src="/images/webstudio56.png" alt="" /></Link>
        </div>
        <div className={styles.headerMenu}>
          <Button onClick={() => history.push('/order/create')} style={{marginRight: 40}}>Подать заявку на ТП</Button>
          <Link to="/news" className={styles.headerMenuLink}>
            <ArticleOutlined className={styles.subMenuIcon} /> Новости
          </Link>
          <Link to={instructionHref} className={styles.headerMenuLink}>
            <ReadMore className={styles.subMenuIcon} /> Инструкция
          </Link>
          <a href="/logout" className={cn(styles.headerMenuLink, styles.avatarFlex)}>
            <div className={styles.avatar}>
              <img src={`/images/avatar/${currentUser?.avatar ? currentUser.avatar : 'default.jpg'}`} alt="" />
            </div>
            Выйти <span className={styles.userName}>({currentUser.name})</span>
          </a>
        </div>
      </div>
    </Navbar>
  )
}
