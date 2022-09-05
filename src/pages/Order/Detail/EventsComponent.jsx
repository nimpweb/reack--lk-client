import React, { useState } from 'react'
import { AddTask } from '@mui/icons-material';
import { Modal } from '../../../components/ui';
import styles from './detail.module.css';

function EventsComponent( { events }) {
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.tabContent}>
      {modal && (
        <Modal title="Выберите событие к заявке" width={650} onClose={() => setModal(false)}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ab dolorum quaerat repudiandae, consequatur doloremque sequi nesciunt assumenda voluptatum dicta reiciendis qui quod repellat debitis. Optio repellat minus placeat quaerat.
          Voluptate maxime unde nobis explicabo sapiente praesentium omnis inventore fugit architecto quibusdam soluta ratione, eius perferendis doloremque ducimus a aspernatur doloribus quasi aliquid natus eaque suscipit voluptates aliquam. Nisi, facilis.
          Pariatur eveniet facilis incidunt obcaecati corrupti illo illum, ratione iusto facere soluta. Eligendi fugit, accusamus mollitia ut pariatur facere corrupti repellat fugiat suscipit esse saepe, ipsum atque repudiandae asperiores corporis.
          Quod quo sunt officiis assumenda illo voluptates reprehenderit laboriosam, enim totam natus aperiam non dolorem officia est quaerat eaque, quibusdam fugit optio nobis tempore quis exercitationem? Numquam blanditiis totam quaerat!
          Temporibus, maxime. Id, vero sint? Veritatis suscipit, cupiditate sed ad facilis quisquam veniam! Corrupti velit incidunt provident cupiditate eum possimus rerum cum laudantium! Saepe illo ullam soluta laborum eos aperiam?
          Officiis hic quos accusamus maiores rem quibusdam quam, magnam et unde ipsam, quaerat iure voluptas aliquam voluptates blanditiis cupiditate iusto assumenda quod. Labore distinctio, assumenda reprehenderit molestiae totam mollitia nesciunt!
          Omnis tempora dicta quaerat soluta dolor minus tempore deserunt voluptates cum aut natus doloribus itaque voluptatibus ratione sit quia fugiat at, beatae illum dignissimos? Tempora, facilis! Repudiandae consectetur vitae eaque.
          Adipisci fugit nisi distinctio soluta deleniti corrupti deserunt at ex. Ab fugiat, asperiores officiis reiciendis fuga molestias quia debitis expedita architecto quaerat, aspernatur a, nesciunt voluptas earum placeat iure tenetur!
          Aut at dolorem in quidem incidunt consequatur dicta doloremque pariatur illo ab vitae eveniet, quasi dolores sunt, maiores animi minima earum similique tenetur accusamus beatae quibusdam asperiores dolorum. Quos, omnis.
          Repellat doloremque cum, quo ducimus in ipsam ad, esse laudantium vitae ratione quos sunt animi delectus fuga temporibus modi ab, non iusto repellendus consequuntur vel? Asperiores assumenda voluptas neque itaque!
        </Modal>
      )}
      <div className={styles.documentAddNewBlock}>
        <button className={styles.documentAddNewButton} onClick={() => setModal(true)}>
          <AddTask /> Добавить событие
        </button>
      </div>
      {
        events.forEach(item => <RowEvent time="21.05.2021 в 11:42" avatar={item.avatar} who={item.company} text={item.text} />)
      }
      <RowEvent time="21.05.2021 в 11:42" avatar={'default.jpg'} who={`ООО "Сетевые решения"`} text={`Выставлен счет №65 от 20.05.2021 на сумму 550 рублей`} />
      <RowEvent time="21.05.2021 в 11:42" avatar={'default.jpg'} who={`ОА "Энергосбытовая компания "Восток"`} text={`Присвоен лицевой счет: 9910368975`} />
      <RowEvent time="21.05.2021 в 11:42" avatar={'default.jpg'} who={`ООО "Сетевые решения"`} text="Заявка принята к рассмотрению" />
      <RowEvent time="19.05.2021 в 08:17" avatar={'user-1.jpg'} who={`Заявитель`} text="Заявка подана" />
    </div>
  )
}

function RowEvent({time, who, avatar, text}) {
  return (
    <div className={styles.eventRow}>
      <div className={styles.eventImage}>
        <img src={`/images/avatar/${avatar}`} alt="" />
      </div>
      <div className={styles.eventContainer}>
        <div className={styles.eventHeaders}>
          <div className={styles.eventTime}>{time}</div>
          <div className={styles.eventInitiator}>{who}</div>
        </div>
        <div className={styles.eventContent}>
          {text}
        </div>
      </div>
    </div>
  )
}

export default EventsComponent