import React from 'react'
import { Link } from 'react-router-dom';
import styles from './modal.module.css';

export default function ModalIntegration() {
  return (
    <div className={styles.modalContent}>
      <img className={styles.modalImage} src="/images/modals/integration.jpg" alt="" />
      <h3><span>3 года успешно</span> внедряем наши продукты</h3>
      <p className={styles.modalText}>Среди наших клиентов:</p>
      <ul className={styles.modalList}>
        <li>- ООО "Электросетевая компания" - г.Оренбург</li>
        <li>- ООО "Ставропольская сетевая компания" - г.Ставрополь</li>
        <li>- ООО "МК-Энерго", ООО "МК-Энерго-2" - г.Оренбург</li>
        <li>- ГК "Энергоходлинг" - Республика Карелия, Астраханская область и т.д.</li>
      </ul>
      <hr />
      <p className="text-center">с полным перечнем можете ознакомиться <Link to="/clients">здесь</Link></p>
    </div>
  )
}
