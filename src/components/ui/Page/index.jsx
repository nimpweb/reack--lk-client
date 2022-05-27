import React, { useEffect } from 'react'
import {ArrowBackIosNew} from '@mui/icons-material'
import cn from 'classnames'
import styles from './page.module.css';
import PageTitle from './../../PageTitle';

export default function Page({children, Sidebar = null, Header = null, goBack = false, ...props}) {
  const title = props.title || '';

  useEffect(( ) => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {Header && <Header /> }
      <div className={cn(styles.page, {[styles.contentCenter]:!!Sidebar === false})} {...props}>
        {Sidebar && <Sidebar />}
        <div className={styles.content}>
          {title.length > 0 && <PageTitle title={title} /> }
          {children}
        </div>
      </div>
    </>
  )
}
