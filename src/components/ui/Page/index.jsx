import React from 'react'
import {ArrowBackIosNew} from '@mui/icons-material'
import cn from 'classnames'
import styles from './page.module.css';

export default function Page({children, Sidebar = null, Header = null, goBack = false, ...props}) {
  const title = props.title || '';
  return (
    <>
      {Header && <Header /> }
      <div className={cn(styles.page, {[styles.contentCenter]:!!Sidebar === false})} {...props}>
        {Sidebar && <Sidebar />}
        <div className={styles.content}>
          {title.length > 0 && <h2 className={styles.pageTitle}> {goBack && <ArrowBackIosNew />} {title}</h2>}
          {children}
        </div>
      </div>
    </>
  )
}
