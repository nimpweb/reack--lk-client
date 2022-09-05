import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { Page, Card } from '../../components/ui'
import styles from './activateuser.module.css'
import {AutoFixHigh} from '@mui/icons-material'
import { Loading } from '../../components'

export default function ActivateUser() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [dateActivate, setDateActivate] = useState('');

  const {id, code} = useParams();
  
  useEffect(() => {
    const init = async () => {
      if (id && code) {
        setTimeout(() => {
          setUserName('Максим Н. Петрович');
          setDateActivate('22 ноября 2021г.')
          setIsLoading(false);
        }, 1000);
      }
      else {
        setIsError(true);
        setIsLoading(false);
      }
    }
    init();
  }, []);

  return (
    <Page>
      <div className="auth">
        <Card>
          <img src="/images/login.png" alt="login" />
          <div className="auth-wrapper">
            {isError 
            ? <div className={styles.activateCenterBlock} styles={{marginTop: 30}}><p>Информации для активации не передано, либо она не верная!</p></div>
            : (
              <>
              {isLoading 
                ? <div className={styles.activateCenterBlock}><Loading marginLeft={10} marginTop={10}>Загрузка...</Loading></div>
                : 
                (
                  <div className={styles.activateContainer}>
                    <AutoFixHigh className={styles.activateIcon} />
                    <div className={styles.activateTextContainer}>
                      <p className={styles.activateText}><strong>{userName}</strong>, Ваша учетная запись активирована! <span className="muted-text"> / {dateActivate}</span></p>
                      <p className={styles.activateText}>Теперь Вы можете авторизоваться в системе кликнув по <Link to="/auth">ссылке</Link></p>
                    </div>
                  </div>
                
                )}
              </>
            )
          }

          </div>
        </Card>
      </div>
    </Page>
  )
}
