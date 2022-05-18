import React, { useEffect, useState } from 'react'
import { Loading } from '../components';
import { useHistory } from 'react-router-dom';
import { logout as authLogout } from '../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';

export default function LogoutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(store => store.auth);
  useEffect(() => {
    (async() => {
      try {
        await authLogout(dispatch);
        if (auth.token === '') {
          localStorage.removeItem('persist:root');
        }
        history.push('/auth');
      } catch (error) {
        console.warn('Ошибка LOGOUT', error);
      } finally {
        setIsLoading(false);
      }
    })()
  }, []);

  return (
    <div className='text-center'>
      {isLoading && <Loading> Выход из системы... </Loading>}  
    </div>
  )
}
