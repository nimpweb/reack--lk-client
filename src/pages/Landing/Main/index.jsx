import { AddTask, FormatListNumbered, PendingActions, HistoryEdu, ArrowRight, Phone, Email, ForwardToInbox, ThumbUpAlt, Info } from '@mui/icons-material';
import React, { useState, useRef } from 'react';
import {Link} from 'react-router-dom'
import {Modal} from '../../../components/ui';
import styles from '../../../styles/landing.module.css';
import OrderToMount from './OrderToMount';
import { ModalIntegration, ModalCounting } from './Modals'
import cn from 'classnames';
import LandingNavBar from './../LandingNavBar'

export default function MainPage() {
  const [modalMount, setModalMount] = useState(false);
  const [modalIntegration, setModalIntegration] = useState(false);
  const [modalCounting, setModalCounting] = useState(false);

  const homeRef = useRef();
  const infoRef = useRef();
  const plusRef = useRef();


  return (
    <div className={styles.mainPage}>
      <LandingNavBar 
        refsItems={[
          { title: 'Главная', ref: homeRef},
          { title: 'Наши достижения', ref: infoRef},
          { title: 'Плюсы', ref: plusRef}
        ]}
      />

      <section ref={homeRef} id="home" className={styles.home}>
        <div className={styles.homeContainer}>
          <div className={styles.homeInfo}>
            <h2>Личный кабинет</h2>
            <h3>Сетевой компании</h3>
            <p>
              c 1-го июля 2020г. за неисполнение требований нормативных актов к сайтам сетевых
              компаний налагаются штрафы
            </p>
            <Link className={styles.detailedButton} to="/law">
              Подробнее <ArrowRight />
            </Link>
          </div>
          <div className={styles.homeImageContainer}>
            <img src="/images/home_computer.png" alt="" />
          </div>
        </div>
      </section>

      <section ref={infoRef} id="info" className={`${styles.section} ${styles.infoSection}`}>
      <div className={styles.sectionTitleBack}>Наши достижения</div>
        <div className={styles.sectionTitleFore}>Наши достижения</div>
        <div className={styles.infoSectionContainer}>
          <div className={styles.infoSectionImageContainer}>
            <img src="/images/russia.png" alt="" />
          </div>
          <div className={styles.infoSectionInfoContent}>
            <div className={styles.infoSecrtionInfoDescription}>
              <h3>С нами сотрудничают</h3>
              <h4>многие сетевые компании</h4>
              <p>
                Наша разработка используется во многих городах бла-бла-бла бла-бла бла...
                бла-бла-бла бла-бла бла... бла-бла-бла бла-бла бла... бла-бла-бла бла-бла бла...
              </p>
            </div>
            <ul className={styles.infoSectionList}>
              <li className={styles.infoSectionListItem}>
                <h3>3</h3>
                <span>
                  подключенных <br /> региона
                </span>
              </li>
              <li className={styles.infoSectionListItem}>
                <h3>12</h3>
                <span>
                  подключенных <br /> сетевых компаний
                </span>
              </li>
              <li className={styles.infoSectionListItem}>
                <h3>5687</h3>
                <span>
                  оформленных <br />
                  заявок
                </span>
              </li>
              <li className={styles.infoSectionListItem}>
                <h3>3462</h3>
                <span>
                  полученных <br />
                  обращений
                </span>
              </li>
            </ul>
            <Link to="/clients" className={styles.detailedButton}>
              Ознакомиться со списком <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
{/* 
      <section id="info" className={`${styles.section} ${styles.infoSection}`}>
        
      </section> */}

      <section ref={plusRef} id="plus" className={`${styles.section} ${styles.plusSection}`}>
        <div className={styles.sectionTitleBack}>Плюсы</div>
        <div className={styles.sectionTitleFore}>Плюсы</div>
        <div className={styles.plusList}>
          <li className={cn(styles.plusListItem, styles.modalItemClick)} onClick={() => {setModalIntegration(true)}}>
            <div className={styles.plusCard}>
              <div className={styles.plusCardHeader}>
                <AddTask className={styles.plusItemIcon} />
                <h3>Внедрение</h3>
              </div>
              <p>Опыт внедрения личных кабинетов более <span>3 лет</span></p>
              <span className={styles.moreButton}>Узнать больше...</span>
            </div>
          </li>
          
          <li className={styles.plusListItem}>
            <div className={styles.plusCard}>
              <div className={styles.plusCardHeader}>
                <HistoryEdu className={styles.plusItemIcon} />
                <h3>Стандарты</h3>
              </div>
              <p>Высокие стандарты разработки как личных кабинетов, так и сайтов исходя из ТЗ и законодательства</p>
              <span className={styles.moreButton}>Узнать больше...</span>
            </div>
          </li>
          <li className={cn(styles.plusListItem, styles.modalItemClick)} onClick={() => {setModalCounting(true)}}>
            <div className={styles.plusCard}>
              <div className={styles.plusCardHeader}>
                <FormatListNumbered className={styles.plusItemIcon} />
                <h3>Количество</h3>
              </div>
              <p>Через личные кабинеты сетевых компаний, созданных на нашей разработке подано более <span>3000 заявок</span> на техприсоединение</p>
              <span className={styles.moreButton}>Узнать больше...</span>
            </div>
          </li>
          <li className={styles.plusListItem}>
            <div className={styles.plusCard}>
              <div className={styles.plusCardHeader}>
                <PendingActions className={styles.plusItemIcon} />
                <h3>Актуальность</h3>
              </div>
              <p>Сервис <span>автоматически подстраивается</span> под любые изменения законодательства</p>
              <span className={styles.moreButton}>Узнать больше...</span>
            </div>
          </li>
        </div>
      </section>

      <div className={styles.singleInfo}>
        <div className={styles.singleInfoContainer}>
          <h4>Пользуетесь сервисом <span>бесплатно</span> со всеми опциям</h4>
          <p>А затем выбирете только те модули, которые необходимы именно Вашей организации</p>
          <h2>Первый месяц</h2>
        </div>
        <button className={styles.detailedButton} onClick={() => setModalMount(true)}>Подключить <ThumbUpAlt /></button>

      </div>

      <section id="modules" className={styles.section}>
        <div className={styles.sectionTitleBack}>Модули</div>
        <div className={styles.sectionTitleFore}>Модули</div>
        <div className={styles.modulesContainer}>
          <div className={styles.moduleBlock}>
            <div className={styles.moduleImageBlock}>
              <Info />
            </div>
            <ul className={styles.moduleList}>
              <li className={styles.moduleListItem}>Информация 1</li>
              <li className={styles.moduleListItem}>Информация 2</li>
              <li className={styles.moduleListItem}>Информация 3</li>
            </ul>
            <div className={styles.moduleDetailBlock}>
              <Link to="/module-detail">Подробнее...</Link>
            </div>
            <div className={styles.modulePriceBlock}>2000 <span className={styles.rubleSign}>₽</span></div>
          </div>
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <div className={styles.sectionTitleBack}>Заполнить заявку</div>
        <div className={styles.sectionTitleFore}>Заполнить заявку</div>
        <div className={styles.contactSectionContent}>
          <div className={styles.contactSectionLeft}>
            <h2>Мы открыты для обсуждения и доработок</h2>
            <ul className={styles.contactList}>
              <li>
                <h3 className={styles.contactListItemTitle}><Phone className={styles.contactIcon}/> Телефон</h3>
                <span><Link to="tel:">8998778878</Link></span>
              </li>
              <li>
                <h3 className={styles.contactListItemTitle}><Email className={styles.contactIcon}/> Email</h3>
                <span><Link to="mailto:nimpweb@yandex.ru">nimpweb@yandex.ru</Link></span>
              </li>
            </ul>
          </div>
          <div className={styles.contactSectionRight}>
            <p>Если есть вопросы, можете связаться с нами <br /><span>любым удобным способом</span></p>
            <form className={styles.contactForm}>
              <div className={styles.contactFormFirstRow}>
                <input type="text" placeholder="Ваше имя" />
              </div>
              <div className={styles.contactFormSecondRow}>
                <input type="text" placeholder="Электронная почта" />
                <input type="text" placeholder="Тема" />
              </div>
              <div className={styles.contactFormThirdRow}>
                <textarea cols="30" rows="7" placeholder="Текст сообщения" />
              </div>
              <button type="submit" className={styles.detailedButton}>Отправить <ForwardToInbox /> </button>
            </form>
          </div>
        </div>
      </section>

      {modalMount && (
        <Modal onClose={() => setModalMount(false)} width={600}>
          <OrderToMount />
        </Modal>
      )}

      {modalIntegration && (
        <Modal onClose={() => setModalIntegration(false)} width={600}>
          <ModalIntegration />
        </Modal>
      )}

      {modalCounting && (
        <Modal onClose={() => setModalCounting(false)} width={600}>
          <ModalCounting />
        </Modal>
      )}



    </div>
  );
}
