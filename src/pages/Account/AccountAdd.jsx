import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Panel, Card, Input, Button, Modal } from '../../components/ui';
import { Add, DoneAll, Delete, Undo } from '@mui/icons-material';
import $api from '../../http';
import styles from './accountadd.module.css';
import RegionSelect from '../../components/Pages/Auth/RegisterComponents/RegionSelect';

export default function AccountAdd() {
  const [showRegionModal, setShowRegionModal] = useState(false);
  const [regionList, setRegionList] = useState([]);

  const [errorMessage, setErrorMessage] = useState('');
  
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [dispetcherPhone, setDispetcherPhone] = useState('');
  const [directorFio, setDirectorFio] = useState('');
  const [directorPost, setDirectorPost] = useState('');
  const [inn, setInn] = useState('');
  const [kpp, setKpp] = useState('');
  const [bik, setBik] = useState('');
  const [rs, setRs] = useState('');

  const history = useHistory();

  const handleAddAccount = async () => {
    // validation
    setShowRegionModal(false);
    setErrorMessage('');
    if (!regionList.length) { return setErrorMessage('Вы должны указать хоты бы один регион действия сетевой компании'); }
    const response = await $api.post('/account/add', {
      account: {title, phone, dispetcherPhone, directorFio, directorPost, inn, kpp, bik, rs },
      regions: regionList
    });
    if (response && response.data.success) {
      history.push('/account/list');
    }
  };

  const addToRegionList = ({id, title}) => {
    setRegionList(prev => [...prev, {id, title}]);
  }

  const removeRegion = (id) => {
    setRegionList(prev => [...prev.filter(r => r.id !== id)]);
  }

  return (
    <div className={styles.accountAddContainer}>
      <div className={styles.accountTwoColumns}>
        <Card title="Основная информация" style={{flex: '3'}}>
          <Input title="Наименование" maxChars={100} showChars={true} onChange={(e) => setTitle(e.target.value)} value={title} />
          <Panel title="Отвественное лицо">
            <Input title="ФИО руководителя" onChange={(e) => setDirectorFio(e.target.value)} value={directorFio} />
            <Input title="Должность руководителя" onChange={(e) => setDirectorPost(e.target.value)} value={directorPost} />
          </Panel>
          <Panel title="Реквизиты">
            <Input title="ИНН" maxChars={12} showChars={true} onChange={(e) => setInn(e.target.value)} value={inn} />
            <Input title="КПП" maxChars={9} showChars={true} onChange={(e) => setKpp(e.target.value)} value={kpp} />
            <Input title="БИК" maxChars={9} showChars={true} onChange={(e) => setBik(e.target.value)} value={bik} />
            <Input title="Расчетный счет" maxChars={20} showChars={true} onChange={(e) => setRs(e.target.value)} value={rs} />
          </Panel>
          <Panel title="Номера телефонов">
            <Input title="Телефон/факс" onChange={(e) => setPhone(e.target.value)} value={phone} />
            <Input title="Диспетчер" onChange={(e) => setDispetcherPhone(e.target.value)} value={dispetcherPhone} />
          </Panel>
        </Card>
        <Card title="Регионы" style={{ position: 'relative', flex: '1' }}>
          <ul className={styles.regionsList}>
            {
              regionList.length > 0 
              ? regionList.map(region => (
                <li key={region.id} className={styles.regionsListItem}>{region.title}
                <Button color="red" onClick={ () => removeRegion(region.id)} variant="icon"><Delete /></Button>
                </li>
              ))
              : <li className={styles.regionListItemEmpty}>Регионы не заданы</li>
            }
          </ul>
          <span className={styles.accountAddButton} onClick={() => setShowRegionModal(true)}>
            <Add />
          </span>
        </Card>
      </div>
      {errorMessage.length > 0 && <p className={styles.errorMessage}>{errorMessage}</p>}
      <div className={styles.buttonPanel}>
        <Button variant="normal-upper" onClick={handleAddAccount}>
          <DoneAll /> Сохранить
        </Button>
        <Button variant="normal-upper" color="red" onClick={() => { history.goBack(); }}>
          <Undo /> Отмена
        </Button>
      </div>

      {showRegionModal && (
        <RegionModal
          buttonClick={(id, title) => { addToRegionList(id, title) }}
          onClose={() => setShowRegionModal(false)}
        />
      )}
    </div>
  );
}

function RegionModal({ buttonClick, ...props }) {
  const [region, setRegion] = useState(null);
  return (
    <Modal
      width={500}
      height={200}
      onClose={props.onClose || null}
     >
      <RegionSelect showLabel={false} onChange={ (region) => { setRegion(region)} }/>
      <div
        style={{ margin: 15, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Button variant={"normal-upper"} onClick={() => { buttonClick({...region}); props.onClose(); }}>
          <DoneAll /> Добавить
        </Button>
      </div>
    </Modal>
  );
}
