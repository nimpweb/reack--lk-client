import React from 'react'
import styles from './modal.module.css';

export default function ModalCounting() {
  return (
    <div className={styles.modalContent}>
      <img className={styles.modalImage} src="/images/modals/counting.jpg" alt="" />
      <h3>На данный момент времени <span>точное количество</span> заявок </h3>
      <div style={{display: 'flex', alignItems: 'center', padding: 20, justifyContent: 'space-around', color: '#555'}}>
        <div style={{border: 'solid 1px rgba(0, 0, 0, .2)', flexDirection: 'column', padding: 20, borderRadius: 20}}>
          <p className="text-center">ЗАЯВОК</p>
          <strong style={{fontSize: 32}}>35697</strong>
        </div>
        <div style={{border: 'solid 1px rgba(0, 0, 0, .2)', flexDirection: 'column', padding: 20, borderRadius: 20}}>
          <p className="text-center">ОБРАЩЕНИЙ</p>
          <strong style={{fontSize: 32}}>78654</strong>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo provident fugiat maxime iste nisi ex illo laboriosam perspiciatis, debitis reprehenderit quas quia rem non! Exercitationem rem pariatur harum commodi suscipit!
      Ducimus, eaque recusandae ad amet dolore necessitatibus reiciendis laboriosam eligendi fuga? Harum aliquam molestias tempora porro quae, eius laboriosam nihil. Rerum iste ad velit illo odit nisi consequuntur expedita corrupti.</p>
    </div>
  )
}
