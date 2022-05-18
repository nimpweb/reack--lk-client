import React from 'react'
import cn from 'classnames';
import styles from './detail.module.css';

function CartComponent( { data } ) {
  return (
    <div className={styles.tabContent}>
      <h3 className={styles.tabTitle}>Заявитель</h3>
      <RowText name="ФИО" text="Петров Сергей Викторович" />
      <RowText name="Номер телефона" text="+79228960175" />
      <RowText name="Паспорт" text="5303 112255 ОВД Центрального р-на г.Оренбург, 28.03.2001г." />
      <RowText name="Адрес регистрации" text="460000, г.Оренбург, ул.Советская, д.60, кв.116" />
      <RowText name="Фактический адрес" text="460000, г.Оренбург, ул.Советская, д.60, кв.116" />

      <h3 className={cn(styles.tabTitle, styles.mt20)}>Информация</h3>
      <RowText name="Тип заявителя" text="Частное лицо" />
      <RowText name="Тип присоедиенения" text="Постоянное подключение" />
      <RowText name="Наименование гарантирующего поставщика" text="ООО Рога и копыта" />
      <RowText name="Предложения по порядку расчетов" text="Единовременный платеж" />

    
      
      <h3 className={cn(styles.tabTitle, styles.mt20)}>Объект подключения</h3>
      <RowText name="Причина подачи" text="Новое подключение" />
      <RowText name="Наименование присоединяемых энергопринимающий устройств" text="Вводное устройство" />
      <RowText name="Местоположение энергопринимающий устройств" text="Оренбургская область, п.Ленина, уч.7828" />
      <RowText name="Кадастровый номер" text="12:34:5555555:555555" link='https://pkk.rosreestr.ru/#/search/51.83776121222107,55.24945766535977/20/@5w3ttfjon?text=56%3A44%3A0201002%3A2826&type=1&opened=56%3A44%3A201002%3A2826'/>

      <h3 className={cn(styles.tabTitle, styles.mt20)}>Параметры подключения</h3>
      <RowText name="Количество точек присоединения" text="1" />
      <RowText name="Максимальная мощность (кВт)" text="15" />
      <RowText name="Уровень напряжения (кВ)" text="0.23" />
      <RowText name="Категория надежности" text="III" />

      <h3 className={cn(styles.tabTitle, styles.mt20)}>Сроки проектирования и поэтапного введения в эксплуатацию</h3>
      <RowText name="1-этап" text="1 квартл 2020 мощность 15" />
      <RowText name="2-этап" text="3 квартл 2020 мощность 15" />
    </div>
  )
}

function RowText({ name, text, link = '' }) {
  return (
    <div className={styles.rowText}>
      <span className={styles.rowName}>{name}:</span> 
      { 
        link ? <a target="_blank" rel="noreferrer" href={link}>{text}</a> : <span className={styles.rowText}>{text}</span>
      }
    </div>
  )
}

export default CartComponent