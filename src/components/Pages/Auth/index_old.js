import React from 'react'
import './auth.css'

export default function Auth() {
  const [activeTab, setActiveTab] = React.useState(0)

  const skList = [
    { id: 1, title: 'ООО "МК-Энерго', phone: '+7(922)554-50-50', image: 'mk-energo-100x100.png' },
    { id: 2, title: 'ООО "МК-Энерго Плюс', phone: '+7(922)554-50-50', image: 'mk-energoplus-100x100.png' },
    { id: 3, title: 'ООО "МК-Энерго Сеть', phone: '+7(922)554-50-50', image: 'mk-energoset-100x100.png' },
  ];

  const handleSkChange = (event) => {
    const index = Number(event.target.value);
    
  }

  const items = [
    { title: 'Авторизация', content: (
      <form className="row" action="/auth/login" id="login-form" method="POST">
        <div className="col-12 form-ctrl">
            <label className="form-control-label">Логин (<strong>email</strong> или <strong>телефон</strong>)</label>
            <input type="text" name="user-login" className="form-ctrl-input" autoFocus />
        </div>

        <div className="col-12 form-ctrl">
            <label className="form-control-label">Пароль</label>
            <input type="password" name="user-login-password" className="form-ctrl-input" />
        </div>

        <div className="col-12 text-center">
            <a href="/nope" className="restore_password_link">Восстановить пароль</a>
            <br /><br />
            <input type="submit" className="button w-100" value="Авторизоваться в системе" />
        </div>
        <div className="w-100">
          <hr />
          <h3>Авторизоваться через социальные сети</h3>
          <div className="d-flex d-flex-cc mt20px">
            <a className="social-link" href="/nope">
              <svg fill="none" height="24" width="136" xmlns="http://www.w3.org/2000/svg"><path d="M0 11.5c0-5.42 0-8.13 1.68-9.82C3.37 0 6.08 0 11.5 0h1c5.42 0 8.13 0 9.82 1.68C24 3.37 24 6.08 24 11.5v1c0 5.42 0 8.13-1.68 9.82C20.63 24 17.92 24 12.5 24h-1c-5.42 0-8.13 0-9.82-1.68C0 20.63 0 17.92 0 12.5z" fill="#2787f5"></path><g clipRule="evenodd" fillRule="evenodd"><path d="M6.5 7.5H4.75c-.5 0-.6.24-.6.5 0 .46.6 2.76 2.76 5.8 1.45 2.07 3.49 3.2 5.34 3.2 1.11 0 1.25-.25 1.25-.68v-1.57c0-.5.1-.6.46-.6.26 0 .7.13 1.74 1.13 1.19 1.19 1.38 1.72 2.05 1.72h1.75c.5 0 .75-.25.6-.74-.15-.5-.72-1.2-1.47-2.05-.4-.49-1.02-1-1.2-1.26-.26-.34-.2-.49 0-.78 0 0 2.13-3 2.35-4.03.11-.37 0-.64-.53-.64H17.5a.76.76 0 00-.76.5s-.9 2.16-2.15 3.57c-.41.41-.6.54-.82.54-.1 0-.27-.13-.27-.5V8.14c0-.44-.13-.64-.5-.64h-2.75c-.28 0-.45.2-.45.4 0 .42.64.52.7 1.7v2.58c0 .57-.1.67-.32.67-.6 0-2.04-2.18-2.9-4.67-.16-.48-.33-.68-.78-.68z" fill="#fff"></path><path d="M66.86 12.5c0 3.24-2.43 5.5-5.78 5.5s-5.78-2.26-5.78-5.5S57.73 7 61.08 7s5.78 2.26 5.78 5.5zm-8.97 0c0 1.97 1.3 3.3 3.19 3.3s3.19-1.33 3.19-3.3c0-1.98-1.3-3.25-3.19-3.25s-3.19 1.28-3.19 3.25zm-17.14-.21c.95-.44 1.56-1.18 1.56-2.33 0-1.73-1.58-2.96-3.87-2.96h-5.27v11h5.5c2.37 0 4.02-1.29 4.02-3.05 0-1.33-.87-2.32-1.94-2.66zM35.6 9.01h2.83c.85 0 1.44.5 1.44 1.2s-.6 1.2-1.44 1.2h-2.83zM38.67 16h-3.06V13.3h3.06c.96 0 1.59.55 1.59 1.36s-.63 1.33-1.59 1.33zM51.84 18h3.19l-5.06-5.71L54.61 7h-2.9l-3.68 4.27h-.6V7H45v11h2.44v-4.38h.59zM76.47 7v4.34h-4.93V7H69.1v11h2.43v-4.44h4.93V18h2.43V7zM86.9 18h-2.44V9.22h-3.8V7H90.7v2.22h-3.8zm9.5-11c-2.11 0-3.91.89-4.52 2.8l2.24.37c.34-.67 1.05-1.2 2.15-1.2 1.33 0 2.06.84 2.17 2.28h-2.32c-3.23 0-4.79 1.42-4.79 3.45 0 2.05 1.59 3.3 3.78 3.3 1.8 0 3-.72 3.53-1.63l.5 1.63h1.76v-6.18c0-3.19-1.74-4.82-4.5-4.82zm-.72 9c-1.19 0-1.9-.5-1.9-1.4 0-.85.57-1.44 2.43-1.44h2.35c0 1.8-1.19 2.84-2.88 2.84zm17.99 2h-3.2l-3.8-4.38h-.6V18h-2.43V7h2.43v4.27h.6L110.34 7h2.9l-4.63 5.29zm3.88 0h2.43V9.22h3.8V7h-10.04v2.22h3.8zM130.1 7c3.34 0 5.56 2.4 5.56 5.37 0 .3-.02.55-.04.79h-8.54c.23 1.69 1.36 2.69 3.17 2.69 1.29 0 2.15-.4 2.68-1.2l2.29.39c-.88 2.01-2.83 2.96-5.12 2.96a5.28 5.28 0 01-5.51-5.5c0-3.12 2.17-5.5 5.51-5.5zm2.92 4.25c-.4-1.37-1.4-2.15-2.92-2.15-1.48 0-2.47.74-2.87 2.15z" fill="currentcolor"></path></g></svg>
            </a>
            <a className="social-link" href="/nope">
              <svg viewBox="0 0 36 36" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4" fill="url(#jsc_s_2)" height="24" width="24"><defs><linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2"><stop offset="0%" stopColor="#0062E0"></stop><stop offset="100%" stopColor="#19AFFF"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path className="p361ku9c" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path></svg>
              facebook
            </a>
          </div>
        </div>
      </form>
    )},
    { title: 'Регистрация', content: (
      <form className="row register-form" action="/auth/register" method="post">
        <div className="col-12 form-ctrl w-100 accent-block">
            <label className="form-ctrl-label">Сетевая компания: </label>
            <select name="user-sk" className="form-ctrl-select" placeholder="Выберете тип">
                { skList.map(sk => (<option key={sk.id} value={sk.id}>{sk.title}</option>)) }
            </select>
        </div>

        <div className="col-12 col-6 form-ctrl hide" data-view="1,2">
            <label className="form-control-label">Наименование</label>
            <input type="text" name="user-org" className="form-ctrl-input" />
        </div>
        <div className="col-12 col-6 form-ctrl" data-view="0,2">
            <label className="form-control-label">Фамилия</label>
            <input type="text" name="user-fam" className="form-ctrl-input" required />
        </div>
        <div className="col-12 col-6 form-ctrl" data-view="0,2">
            <label className="form-control-label">Имя</label>
            <input type="text" name="user-name" className="form-ctrl-input" required />
        </div>
        <div className="col-12 col-6 form-ctrl" data-view="0,2">
            <label className="form-control-label">Отчество</label>
            <input type="text" name="user-otch" className="form-ctrl-input" />
        </div>
        <div className="col-12 col-6 form-ctrl">
            <label className="form-control-label">Телефон</label>
            <input type="text" name="user-phone" className="form-ctrl-input" required />
        </div>
        <div className="col-12 form-ctrl">
            <label className="form-control-label">Email</label>
            <input type="email" name="user-email" className="form-ctrl-input" required />
        </div>

        <div className="col-12 col-6 form-ctrl">
            <label className="form-control-label">Пароль</label>
            <input type="password" name="user-password" className="form-ctrl-input" />
            <span className="form-ctrl-under-text">Пароль должен быть длиной не менее 6 символов.</span>
        </div>
        <div className="col-12 col-6 form-ctrl">
            <label className="form-control-label">Подтверждение пароля</label>
            <input type="password" name="user-password-confirm" className="form-ctrl-input" />
        </div>

        <div className="col-12 form-ctrl form-ctrl-cbxs">
            <label className="checkbox">
                <input type="checkbox" name="user-policy-1" />
                <span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <span>Подтверждаю ознакомленность с положениями Федерального закона РФ от 27.07.2006 №152-ФЗ «<a href="#?">О персональных данных</a>», права и обязанности в области защиты персональных данных мне разъяснены.</span>
            </label>
        </div>
        
        <div className="col-12 form-ctrl-btns">
            <input type="submit" className="button" name="registration-submit" value="Зарегистрироваться" />
        </div>
      </form>
    ) }
  ];


  const handleTabClick = (event) => {
    setActiveTab(+event.target.dataset.index);
  }

  const tabContent = () => (
    <section className="tabs">
      <div className="tabs__wrapper">
        {items[activeTab].content}
      </div>
    </section>
  )

  React.useEffect(()=> {
    // const token = 'Yy1WSjhEUzDJTBWSoQOa';
    // const authUrl = `https://oauth.vk.com/authorize?client_id=7839530&display=page&redirect_uri=http://localhost:3000/auth&scope=email&response_type=token&v=5.130&state=123456`;
    // const token = 'b4366b9db4366b9db4366b9d9db441f4b7bb436b4366b9dd4be446c8832e7c03eff75ed';
    const token='3347a7b41be6d111c252facb2e2aa933b1c856129a18e524ea3606ff486f6c76cb947ba5b490880dbef4';
    const params = {
      user_ids : 'nimpweb'
    }
    const vk = async () => {
      const paramStr = Object.entries(params).map(e=>`${e[0]}=${e[1]}`).join('&')

      // const url = 'https://api.vk.com/method/users.get?user_ids=210700286&fields=bdate&v=5.130&callback=callbackFunc';
      const url = `https://api.vk.com/method/account.getProfileInfo?${paramStr}&access_token=${token}&v=V`;
      console.log(url);
      try {
        const res = await fetch(url, {
          headers: {
            'Access-Control-Allow-Origin' : 'http://localhost:3000',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Credentioals': 'true',
            'Content-Type': 'json/application'
          }
        });
        return await res.json();
      }
      catch (err) {
        console.log(err);
        return false;
      }

      
    }

    const res = vk();
    
    console.log(res);
  }, []);

  return (
    <div className="f-container">
      <div className="block-rounded">
        <div className="auth">
          <div className="container">
              <div className="auth-wrapper">

                  <div className="auth-panel">
                    <ul className="auth-tabs">
                    { items.map((item, index) => (
                      <li key={index} 
                        className={`tab-item ${index === activeTab ? ' selected' : ''}`} 
                        onClick={handleTabClick} 
                        data-index={index}>
                      {item.title}
                      </li>
                    )) }
                    <li className="tab-slider" role="presentation"></li>
                    </ul>
                  </div>
                  
                  { tabContent() }

                  <div className="form-ctrl text-center reg-help">
                    <a className="instruction-link" href="/help/reg/index.htm" target="_blank">
                      <svg id="Layer_1" enableBackground="new 0 0 511.168 511.168" height="24" viewBox="0 0 511.168 511.168" width="24" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m16.696 96.479h385.635v107.293h-385.635z" fill="#ffda45"/></g><path d="m359.331 96.479h43v107.293h-43z" fill="#fac800"/><path d="m237.834 96.479h122v107.293h-122z" fill="#fff5f5"/><g><g><g><path d="m482.168 503.668h-382.667c-31.296 0-56.667-25.371-56.667-56.667 0-31.296 25.371-56.667 56.667-56.667h382.667z" fill="#f0f5fa"/><path d="m442.168 390.335h40v113.333h-40z" fill="#e4ecf2"/><g><path d="m502.167 511.168h-402.666c-35.381 0-64.167-28.785-64.167-64.167s28.785-64.167 64.167-64.167h402.667c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5h-402.667c-27.11 0-49.167 22.056-49.167 49.167 0 27.11 22.056 49.167 49.167 49.167h402.667c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.501 7.5z" fill="#6e9eff"/></g><g><g><path d="m482.167 435.613h-308.909c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h308.909z" fill="#c5d7e6"/></g><g><path d="m482.167 473.391h-226.889c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h226.889z" fill="#c5d7e6"/></g></g></g><g><path d="m418.028 375.377h-372.353c-20.254 0-36.674-16.419-36.674-36.674 0-20.254 16.419-36.674 36.674-36.674h372.354v73.348z" fill="#f0f5fa"/><path d="m378.028 302.029h40v73.348h-40z" fill="#e4ecf2"/><g><path d="m440.972 382.877h-395.297c-24.357 0-44.174-19.816-44.174-44.174s19.816-44.174 44.174-44.174h395.297c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5h-395.297c-16.086 0-29.174 13.087-29.174 29.174s13.087 29.174 29.174 29.174h395.297c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#74d84b"/></g><g><g><path d="m418.028 347.761h-105.315c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h105.315z" fill="#c5d7e6"/></g></g></g><g><path d="m133.046 7.5h298.87c22.5 0 40.739 18.24 40.739 40.739 0 22.5-18.24 40.739-40.739 40.739h-298.87z" fill="#f0f5fa"/><path d="m431.916 7.5h-40c22.5 0 40.739 18.24 40.739 40.739 0 22.5-18.24 40.739-40.739 40.739h40c22.5 0 40.739-18.24 40.739-40.739 0-22.499-18.239-40.739-40.739-40.739z" fill="#e4ecf2"/><g><path d="m431.916 96.479h-324.357c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h324.357c18.328 0 33.239-14.911 33.239-33.239s-14.911-33.24-33.239-33.24h-324.357c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h324.357c26.599 0 48.239 21.64 48.239 48.239s-21.64 48.24-48.239 48.24z" fill="#fc435f"/></g></g><g><g><path d="m60.099 203.771h445.902v90.758h-445.902z" fill="#6e9eff"/></g><path d="m369.834 203.771h136.167v90.758h-136.167z" fill="#bf6930"/><path d="m466.001 203.771h40v90.758h-40z" fill="#ad5f2c"/><path d="m213.501 264.15h-102.009c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15h102.009c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15z" fill="#fff5f5"/><g><path d="m462.667 256.65h-48.833c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5h48.833c4.142 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#fff5f5"/></g></g><g><g><path d="m326.167 166.956c-4.142 0-7.5-3.358-7.5-7.5v-18.662c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v18.662c0 4.142-3.357 7.5-7.5 7.5z" fill="#677a8f"/></g><g><path d="m298.834 166.956c-4.142 0-7.5-3.358-7.5-7.5v-18.662c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v18.662c0 4.142-3.357 7.5-7.5 7.5z" fill="#677a8f"/></g><g><path d="m271.501 166.956c-4.142 0-7.5-3.358-7.5-7.5v-18.662c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v18.662c0 4.142-3.358 7.5-7.5 7.5z" fill="#677a8f"/></g></g></g><g><path d="m132.834 40.739h171.138c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5h-171.138z" fill="#c5d7e6"/></g></g></g></svg>
                      Прочитать инструкцию по регистрации и входу в ЛК</a>
                    <a rel="noreferrer" className="instruction-link" href="https://youtube.com" target="_blank">
                      <svg height="24" viewBox="0 -77 512.00213 512" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0" fill="#f00"/><path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff"/></svg>
                      Просмотреть видеоинструкцию по регистрации и входу в ЛК</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
