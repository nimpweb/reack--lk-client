import { PushPin, Remove, Delete, Download, AssignmentTurnedIn, Add, AttachFile, Info } from '@mui/icons-material';
import React, { useEffect, useCallback, useState } from 'react'
import Button from './../../components/ui/Button/index';
import Modal from './../../components/ui/Modal/index';
import { documents } from '../../redux/db'

function AddDocumentModal({ setModal, documentItems  }) {
  
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
          documentItems.map(doc => (
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
  const [modal, setModal] = useState(false);
  const [docs, setDocs] = useState([]);

  const getDocs = useCallback(() => documents().filter( doc => ( doc.storedAtProfile === true )));

  useEffect(() => {
    console.log('documents', documents())
    setDocs(getDocs())
  }, [])


  return (
    <div className="profileDocumentContainer">
      <div style={{paddingBottom: 20, display: 'flex', justifyContent: 'center'}}>
          <Button onClick={()=> setModal(true)}><Add /> Добавить</Button>
      </div>
      <div className="profileDocumentList">
        { 
          (docs.length > 0)
          ? docs.map(item => (
            <ListItem key={item.id} title={item.title} description={item.description}  />
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
      { modal && <AddDocumentModal documentItems={docs}  setModal={setModal} /> }
    </div>
  )
}

function ListItem({ title, description }) {
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