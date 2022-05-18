import { PushPin, Remove, Delete, Download, AssignmentTurnedIn, Add, AttachFile, Info } from '@mui/icons-material';
import React, { useState } from 'react'
import Button from './../../components/ui/Button/index';
import Modal from './../../components/ui/Modal/index';

const documentList = [
  {
    id: 1,
    documentId: 1,
    title: 'Документ удостоверяющий личность заявителя',
    description: 'Паспорт заявителя или иной документ удостоверяющий личность'
  },
  {
    id: 2,
    documentId: 2,
    title: 'Документ, подтверждающий полномочия представителя заявителя',
    description: 'Доверенность, приказ о назначении или иной документ подтверждающий полномочия представителя заявителя действовать от другого лица или группы лиц'
  }
];

const docs = [
  {
    id: 1,
    title: 'Документ удостоверяющий личность заявителя',
    description: 'Паспорт заявителя или иной документ удостоверяющий личность'
  },
  {
    id: 2,
    title: 'Документ, подтверждающий полномочия представителя заявителя',
    description: 'Доверенность, приказ о назначении или иной документ подтверждающий полномочия представителя заявителя действовать от другого лица или группы лиц'
  },
  {
    id: 3,
    title: 'План расположения энергопринимающих устройств',
    description: 'План расположения энергопринимающих устройств, которые необходимо присоединить к электрическим сетям сетевой организации'
  },
  {
    id: 4,
    title: 'Копия документа подтверждающего право сообственности',
    description: 'Копия документа, подтверждающего право собственности или иное предусмотренное законом основание на объект капитального строительства (нежилое помещение в таком объекте капитального строительства) и (или) земельный участок, на котором расположены (будут располагаться) объекты заявителя, либо право собственности или иное предусмотренное законом основание на энергопринимающие устройства (для заявителей, планирующих осуществить технологическое присоединение энергопринимающих устройств потребителей, расположенных в нежилых помещениях многоквартирных домов или иных объектах капитального строительства, - копия документа, подтверждающего право собственности или иное предусмотренное законом основание на нежилое помещение в таком многоквартирном доме или ином объекте капитального строительства)'
  }
]

function AddDocumentModal({ setModal  }) {
  const handleAddNewDoc = () => console.log('do add new doc')  
  return (
    <Modal 
      title="Загрузка документов"
      width={800}
      onClose={() => setModal(false)}
    > 
      <div className="profileDocumentWarn">
        <Info style={{fontSize: 32}} />
        <ul style={{listStyle: 'none'}}>
          <li>Максимальный размер файла <strong>10Мб</strong></li>
          <li>Максимальный размер всех файлов <strong>10Мб</strong></li>
        </ul>
      </div>
      <div className="profileDocumentList">
        {
          docs.map(doc => (
            <div key={doc.id} className="profileFileListItem" onClick={handleAddNewDoc}> 
              <AttachFile className="profileFileListItemIcon" />
              <div className="profileFileListItemContent">
                <div className="title">{doc.title}</div>
                <div className="description">{doc.description}</div>
              </div>
            </div>
          ))
  
        }
      </div>
    </Modal>
  )
}

function AddDocumentContainer() {
  const [modal, setModal] = useState(false)

  return (
    <div className="profileDocumentContainer">
      <div className="text-center">
        <h3>Ваши документы</h3>
      </div>
      <div style={{paddingBottom: 20, display: 'flex', justifyContent: 'center'}}>
          <Button onClick={()=> setModal(true)}><Add /> Добавить</Button>
      </div>
      <div className="profileDocumentList">
        { 
          (documentList.length > 0)
          ? documentList.map(item => (
            <ListItem key={item.id} title={item.title} description={item.description} filename={item.filename} />
          ))
          : (
            <>
              <p className="text-center">У Вас не добавлено ни одного документа...</p> 
              <p className="text-center text-muted" style={{paddingBottom: 15}}><small>Вы можете добавить сюда документы, а при оформлении заявки они будут автоматически прикладываться</small></p>
            </>
          )
          
        }
      </div>
      <div className="profileDocumentInfo">
        Документы прикладывайте в хорошем качестве, читаемые однозначно понимаемые, без фотографий рук, ног и т.п.
      </div>
      { modal && <AddDocumentModal  setModal={setModal} /> }
    </div>
  )
}

function ListItem({ title, description, filename }) {
  return (
    <div className="profileFileListItem">
      <PushPin className="profileFileListItemIcon" />
      <div className="profileFileListItemContent">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="profileFileListItemButtons">
        <Button variant="icon" ><Download /></Button>
        <Button variant="icon" ><AssignmentTurnedIn /></Button>
        <Button variant="icon" color="red"><Delete /></Button>
      </div>
    </div>
  )
}

export default AddDocumentContainer