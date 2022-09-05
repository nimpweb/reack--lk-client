import React from 'react'
import styles from './modal.module.css';

export default function ModalMoneyFree() {
  return (
    <div className={styles.modalContent}>
      <img className={styles.modalImage} src="/images/modals/moneyFree.jpg" alt="" />
      <h3>Первый месяц пользования сервиса - БЕСПЛАТНО</h3>
      <p className={styles.modalText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dicta ex perferendis, ipsa, neque mollitia ad expedita delectus reiciendis nobis perspiciatis facilis asperiores, porro molestias voluptate repellat ipsum minima voluptatem.
      Quod veniam repellat fugit recusandae delectus maxime sit porro nihil sapiente ullam, quidem impedit magnam? Ipsum, libero? Nam aliquid velit ducimus aperiam excepturi blanditiis vitae sint natus? Quis, doloremque soluta!
      Voluptatum provident porro vitae cupiditate maiores fugiat repellendus dolores. Delectus, explicabo obcaecati officiis eligendi modi iure mollitia consequuntur excepturi minima incidunt nobis praesentium suscipit velit, corrupti nesciunt soluta? Distinctio, laboriosam!</p>
    </div>
  )
}
