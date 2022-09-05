import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Toast from '../../ui/Toast';
import { Loading } from '../../../components';
import { redirectLinkOnAuth } from '../../../utils/functions';
import { login as authLogin } from '../../../redux/slices/auth'
import { getMe } from '../../../redux/slices/user'
import RestorePassword from './RestorePassword';

export default function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const { loading } = useSelector(store => store.auth);
 
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (!login || !password) { return setErrorMessage('Логин и/или пароль не могут быть пустыми'); }
      const response = await authLogin(dispatch, {login, password});
      const token = response.payload?.token || null;
      if (token) {
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, token);
        await getMe(dispatch);
        history.push(redirectLinkOnAuth());
      }
      return setErrorMessage('Логин или пароль указаны не верно!');
    } catch (err) {
      console.warn('AUTHORIZATION_ERROR', err);
      return setErrorMessage('Произошла ошибка при авторизации!');
    } 
  }

  return (
    <form className="row" action="/auth/login" id="login-form" method="POST" onSubmit={handleSubmit}>
      {errorMessage && (
        <Toast message={errorMessage} onClose={ () => setErrorMessage('') } />
      )}
      <div className="col-12 form-ctrl">
        <label className="form-control-label">
          Логин (<strong>email</strong> или <strong>телефон</strong>)
        </label>
        <input type="text" name="user-login" className="form-ctrl-input" autoFocus  onChange={ e => setLogin(e.target.value) } value={login} />
      </div>

      <div className="col-12 form-ctrl">
        <label className="form-control-label">Пароль</label>
        <input type="password" name="user-login-password" className="form-ctrl-input" onChange={ e => setPassword(e.target.value) } value={password} />
      </div>

      <div className="col-12 text-center">
        <RestorePassword />
        <br />
        <button type="submit" className="button w-100" disabled={loading}>{loading ? <Loading>Идет авторизация...</Loading> : 'Авторизоваться в системе'}</button>
      </div>
      <div className="socialContent">
        <div className="socialInDev">
          В разработке...
        </div>
        <hr />
        <h3>Авторизоваться через социальные сети</h3>
        <div className="d-flex d-flex-cc mt20px">
          <a className="social-link" href="/nope">
            <svg fill="none" height="24" width="136" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 11.5c0-5.42 0-8.13 1.68-9.82C3.37 0 6.08 0 11.5 0h1c5.42 0 8.13 0 9.82 1.68C24 3.37 24 6.08 24 11.5v1c0 5.42 0 8.13-1.68 9.82C20.63 24 17.92 24 12.5 24h-1c-5.42 0-8.13 0-9.82-1.68C0 20.63 0 17.92 0 12.5z"
                fill="#2787f5"></path>
              <g clipRule="evenodd" fillRule="evenodd">
                <path
                  d="M6.5 7.5H4.75c-.5 0-.6.24-.6.5 0 .46.6 2.76 2.76 5.8 1.45 2.07 3.49 3.2 5.34 3.2 1.11 0 1.25-.25 1.25-.68v-1.57c0-.5.1-.6.46-.6.26 0 .7.13 1.74 1.13 1.19 1.19 1.38 1.72 2.05 1.72h1.75c.5 0 .75-.25.6-.74-.15-.5-.72-1.2-1.47-2.05-.4-.49-1.02-1-1.2-1.26-.26-.34-.2-.49 0-.78 0 0 2.13-3 2.35-4.03.11-.37 0-.64-.53-.64H17.5a.76.76 0 00-.76.5s-.9 2.16-2.15 3.57c-.41.41-.6.54-.82.54-.1 0-.27-.13-.27-.5V8.14c0-.44-.13-.64-.5-.64h-2.75c-.28 0-.45.2-.45.4 0 .42.64.52.7 1.7v2.58c0 .57-.1.67-.32.67-.6 0-2.04-2.18-2.9-4.67-.16-.48-.33-.68-.78-.68z"
                  fill="#fff"></path>
                <path
                  d="M66.86 12.5c0 3.24-2.43 5.5-5.78 5.5s-5.78-2.26-5.78-5.5S57.73 7 61.08 7s5.78 2.26 5.78 5.5zm-8.97 0c0 1.97 1.3 3.3 3.19 3.3s3.19-1.33 3.19-3.3c0-1.98-1.3-3.25-3.19-3.25s-3.19 1.28-3.19 3.25zm-17.14-.21c.95-.44 1.56-1.18 1.56-2.33 0-1.73-1.58-2.96-3.87-2.96h-5.27v11h5.5c2.37 0 4.02-1.29 4.02-3.05 0-1.33-.87-2.32-1.94-2.66zM35.6 9.01h2.83c.85 0 1.44.5 1.44 1.2s-.6 1.2-1.44 1.2h-2.83zM38.67 16h-3.06V13.3h3.06c.96 0 1.59.55 1.59 1.36s-.63 1.33-1.59 1.33zM51.84 18h3.19l-5.06-5.71L54.61 7h-2.9l-3.68 4.27h-.6V7H45v11h2.44v-4.38h.59zM76.47 7v4.34h-4.93V7H69.1v11h2.43v-4.44h4.93V18h2.43V7zM86.9 18h-2.44V9.22h-3.8V7H90.7v2.22h-3.8zm9.5-11c-2.11 0-3.91.89-4.52 2.8l2.24.37c.34-.67 1.05-1.2 2.15-1.2 1.33 0 2.06.84 2.17 2.28h-2.32c-3.23 0-4.79 1.42-4.79 3.45 0 2.05 1.59 3.3 3.78 3.3 1.8 0 3-.72 3.53-1.63l.5 1.63h1.76v-6.18c0-3.19-1.74-4.82-4.5-4.82zm-.72 9c-1.19 0-1.9-.5-1.9-1.4 0-.85.57-1.44 2.43-1.44h2.35c0 1.8-1.19 2.84-2.88 2.84zm17.99 2h-3.2l-3.8-4.38h-.6V18h-2.43V7h2.43v4.27h.6L110.34 7h2.9l-4.63 5.29zm3.88 0h2.43V9.22h3.8V7h-10.04v2.22h3.8zM130.1 7c3.34 0 5.56 2.4 5.56 5.37 0 .3-.02.55-.04.79h-8.54c.23 1.69 1.36 2.69 3.17 2.69 1.29 0 2.15-.4 2.68-1.2l2.29.39c-.88 2.01-2.83 2.96-5.12 2.96a5.28 5.28 0 01-5.51-5.5c0-3.12 2.17-5.5 5.51-5.5zm2.92 4.25c-.4-1.37-1.4-2.15-2.92-2.15-1.48 0-2.47.74-2.87 2.15z"
                  fill="currentcolor"></path>
              </g>
            </svg>
          </a>
          <a className="social-link" href="/nope">
            <svg
              viewBox="0 0 36 36"
              className="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
              fill="url(#jsc_s_2)"
              height="24"
              width="24">
              <defs>
                <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2">
                  <stop offset="0%" stopColor="#0062E0"></stop>
                  <stop offset="100%" stopColor="#19AFFF"></stop>
                </linearGradient>
              </defs>
              <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
              <path
                className="p361ku9c"
                d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
            </svg>
            facebook
          </a>
        </div>
      </div>
    </form>
  )
}
