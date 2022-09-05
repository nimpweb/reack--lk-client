import React, { useState } from 'react'
import { Modal, Confirm, Button } from '../../../components/ui';
import { PlusOne, AttachFile, Info, Download, Delete, HistoryEdu } from '@mui/icons-material';
import styles from './detail.module.css';

function DocumentComponent({documentList}) {
  const [modal, setModal] = useState(false)
  const removeDocument = (documentId) => {
    console.log('REMOVE DOCUMENT WITH ID: ', documentId);
  }

  const signDocument = (documentId) => {
    console.log('SIGM DOCUMENT WITH ID: ', documentId)
  }

  return (
    <>
      <div className={styles.tabContent}>
        <div className={styles.documentAddNewBlock}>
          <button className={styles.documentAddNewButton} onClick={() => setModal(true)}>
            <PlusOne /> Добавить документ
          </button>
        </div>
        {documentList.map(doc => <RowDocument key={doc.id} item={doc} onRemove={removeDocument} onSign={signDocument} />)}
      </div>
      {modal && (
        <Modal title="Добавить документ из списка" width={650} height={400} onClose={() => setModal(false)}>
          <div className={styles.addNewDocumentBlock}>
            <div className={styles.orderDetailWarningMessage}>
              <div className={styles.flexContent}><Info /> Максимальный размер файла не может превышать <strong>1,5мб</strong></div>
            </div>
            <br />
            <a href="/" className={styles.addNewDocumentItem}>
              <AttachFile /> План расположения энергопринимающих устройств, которые необходимо присоединить к электрическим сетям сетевой организации
            </a>
            <a href="/" className={styles.addNewDocumentItem}>
              <AttachFile /> Копия документа, подтверждающего право собственности или иное предусмотренное законом основание на объект капитального строительства (нежилое помещение в таком объекте капитального строительства) и (или) земельный участок, на котором расположены (будут располагаться) объекты заявителя, либо право собственности или иное предусмотренное законом основание на энергопринимающие устройства (для заявителей, планирующих осуществить технологическое присоединение энергопринимающих устройств потребителей, расположенных в нежилых помещениях многоквартирных домов или иных объектах капитального строительства, - копия документа, подтверждающего право собственности или иное предусмотренное законом основание на нежилое помещение в таком многоквартирном доме или ином объекте капитального строительства)
            </a>
            <a href="/" className={styles.addNewDocumentItem}>
              <AttachFile /> Реквизиты заявителя (Фамилия, имя, отчество, серия, номер и дата выдачи паспорта или иного документа, удостоверяющего личность в соответствии с законодательством Российской Федерации) (копия паспорта с фотографией и пропиской)
            </a>
          </div>
        </Modal>
      )}  
    </>
  )
}

function RowDocument({ item, onRemove, onSign }) {
  const [removeModal, setRemoveModal] = useState(false)

  const handleSignFile = (e) => {
    e.preventDefault();
    console.log('do sign file')
  }

  const handleRemoveClick = (e) => {
    e.preventDefault();
    console.log('remove item click')
  }

  const handleDeleteFile = async (e) => {
    e.preventDefault();
    if (item.user.canRemove && onRemove) {
      await onRemove(item.id)
      setRemoveModal(false)
    }
  }

  return (
    <>
      {removeModal && <Confirm content="Действительно удалить документ?" onOk={handleDeleteFile} onCancel={() => setRemoveModal(false)} />}
      <div className={styles.documentRow}>
        <div className={styles.documentIcon}>{item.fileExt}</div>
        <div className={styles.documentText}>{item.title}</div>
        <div className={styles.documentButtons}>
          {item.user.canDownload && <Button variant="icon" href={item.downloadLink} download={`${item.title}.${item.fileExt}`} ><Download /></Button> }
          {item.user.canSign && <Button variant="icon" href="/" color="green" onClick={handleSignFile}><HistoryEdu /></Button>}
          {item.user.canRemove && <Button variant="icon" color="red" onClick={handleRemoveClick}><Delete /></Button>}
        </div>
      </div>
    </>
  )
}

export default DocumentComponent;