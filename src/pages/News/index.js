import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTitle from './../../components/PageTitle';
import s from './news.module.css'

const NewsPage = props => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <PageTitle title="Новости" />

      <div className={s.newsContainer}>
        <div className={s.newsItem}>
          <div className={s.header}>
            <div className={s.title}>Запуск личного кабинета в СК</div>
            <div className={s.date}>10.05.2022 в 12:40</div>
          </div>
          <div className={s.content}>
            <p>Добро пожаловать в личный кабинет по технологическому присоединению сетевой организации <a rel="nofollow" href="http://webstudio56.ru" target_="_blank">ООО "Сетевое решение"</a></p>
            <ul>
              <li>Чтобы продолжить работу в личном кабинете, Вам необходимо заполнить <Link to={`/profile`}>профиль</Link> и, также, по возможности приложить документы в профиль, чтобы удобнее в дальнейшем оформлять заявки. </li>
              <li>Чтобы подать заявку можете <Link to={`/order/create`}>перейти по ссылке</Link> </li>
            </ul>
            <p>Личный кабинет дает возможность подать заявку на технологическое присоединение в электронном виде, а также отслеживать ход работы. Добавлять, корректировать заявку (по согласованию с сетевой компанией) в удобном виде, без посещения офиса компании. Получите квалифицированную помощь в оформлении заявка, а в случае отсутствия возможности подачит в электронном виде, можете обратиться сотруднику сетевой компании.</p>
          </div>
        </div>
      
        <p className="text-center">&copy; ООО "Сетевая компания" - 2022г.</p>
      </div>
    </>
  )
}

export default NewsPage