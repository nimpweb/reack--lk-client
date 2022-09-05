import React, { useCallback,  useState } from 'react'
import { Report, Done, DoNotDisturb } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {  Checkbox, Layout } from '../../../../components/ui'
import { Field } from 'formik'
import styles from '../create.module.css'
import NewSelect from './../../../../components/ui/NewSelect/index';
import LabelField from './../../../../components/LabelField';
import InputField from './../../../../components/InputField';
import UserAddModal from './../../../UserList/components/UserAddModal';

const profile = {
  firstName: 'Нестеров',
  middleName: 'Максим',
  lastName: 'Петрович',
  phone: '+79228960175',
  email: 'nimpweb@yandex.ru',
  address: '460018, г.Оренбург, пр.Победы, д.6, кв.8',
  inn: '567898545',
  avatar: '',
  documents: [
    { 
      id: 564,
      title: 'Паспорт заявителя',
      filename: 'https://localhost:3000/profiles/56/documents/hasfile.pdf'
    }
  ],
  companies: [
    {
      title: 'ООО "Мокрые кеды',
      kpp: 'КПП: 568789778',
      bik: 'БИК: 78797',
      address: '460000, г.Оренбург, ул.Цвилинга, д.44, офис 104'
    }
  ]
  
}

const userList = [
  {
    id: 111,
    firstName: 'Петров',
    middleName: 'Петр',
    lastName: 'Петрович',
    phone: '11111',
    email: 'petrov@yandex.ru',
    address: '460018, г.Оренбург, пр.Победы, д.6, кв.8',
    inn: '567898545',
    avatar: '',
    documents: [
      { 
        id: 564,
        title: 'Паспорт заявителя',
        filename: 'https://localhost:3000/profiles/56/documents/hasfile.pdf'
      }
    ],
    companies: []
  }, 
  {
    id: 222,
    firstName: 'Сидоров',
    middleName: 'Вениамин',
    lastName: 'Поликарпович',
    phone: '8888888',
    email: 'sidorov@yandex.ru',
    address: '460018, г.Оренбург, пр.Победы, д.6, кв.8',
    inn: '567898545',
    avatar: '',
    documents: [
      { 
        id: 564,
        title: 'Паспорт заявителя',
        filename: 'https://localhost:3000/profiles/56/documents/hasfile.pdf'
      }
    ],
    companies: []
  },   
]

export default function Step1({ setValue }) {
  const [data, setData] = useState({
    sid: 1,
    firstName: '',
    middleName: '',
    lastName: '',
    applicantFio: '',
    applicantAddress: '',
    applicantEmail: '',
    applicantPhone: '',
    applicantInn: '',
    isRepresentative: false,
    representativeFio: '',
    representativePhone: '',
    representativeDocument: '',
    agreeCheck: false
  })
  const [selectedProfile, setSelectedProfile] = useState(profile)
  const [agree, setAgree] = useState(false);
  const [showUserAddModal, setShowUserAddModal] = useState(false);
  const [modalCancelOrder, setModalCancelOrder] = useState(true);

  const isAdmin = false

  const handleChangeAgreeCheckbox = useCallback(() => setAgree(prev => !prev), [])
  const handleAddUserClick = useCallback(() => setShowUserAddModal(prev => !prev), [])

  const userProfile = useCallback(() => {
    return [
      { id: 0, value: 'Добавить нового пользователя и выбрать его', onSelect: handleAddUserClick },
      ...userList.map( u => ({ id: u.id, value: `${u.firstName} ${u.middleName} ${u.lastName} | ${u.email}`}))
    ]
  }, []);

  const handleChangeAdminUserList = item => {
    const filtered = userList.filter(f => f.id === parseInt(item.id))[0] || null
    setSelectedProfile(filtered)
  }

 
  return (
    <>
      { showUserAddModal && <UserAddModal onClose={() => setShowUserAddModal(false)} onSuccess={(item) => console.log('NEW_USER', item)} /> }
      { isAdmin  && <Layout margin='20px 0' padding="20px" content="flex-start" border={`solid 1px rgba(100, 100, 100, .2)`} borderRounded="10px" gap="3px">
          <div className={styles.adminBox}> 
            <NewSelect 
              title="Выберите пользователя, на которого будет оформляться заявка"
              items={ userProfile } 
              onChange={ item => handleChangeAdminUserList(item)}
            />
            <p style={{fontSize: 12, fontWeight: '300', color: 'silver'}}> I. Администратор сетевой компании имеете возможность создаввать нового пользователя, а также выбирать пользователя, на чье имя будет оформляться заявка Вами</p>
            <p style={{fontSize: 12, fontWeight: '300', color: 'silver'}}>II.Подача заявки администратором может осуществляться только для физического лица мощностью до 15Квт</p>
          </div>
        </Layout>
       }
      { profile.companies.length > 0 && (
        <Layout margin="10px" padding="20px" direction="column" align="flex-start">
            <h3 className="w-100">Заявка будет оформляться на: </h3>
            <Field title="Физическое лицо" name="sid" type="radio" as={Checkbox} value={1} checked={true} />
            <Field title="Юридическое лицо или ИП" name="sid" type="radio" as={Checkbox} value={2} />
        </Layout>
      ) }
      
      { 
        selectedProfile 
          ? (
            <>
              <Layout margin="10px" padding="20px" direction="column" align="flex-start">
                <h3 className="w-100">Данные заявителя</h3>
                <LabelField title="ФИО" name="applicantFio" putValue={() => {} } />
                <LabelField title="Фактический адрес" name="applicantFactAddress" value={selectedProfile.address} />
                <LabelField title="Адрес электронной почты" subTitle="Основная авторизация осуществляется по Email, все уведомления будут приходить на этот адрес" name="applicantEmail" value={selectedProfile.email} />
                <LabelField title="Мобильный телефон" subTitle="необходим в случае авторизации или получения SMS-оповещений" name="applicantEmail" value={selectedProfile.email} />
                <LabelField title="ИНН" name="applicantInn" value={selectedProfile.inn} />

                <InputField error={true} title="Текстовое поле" helperText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim quas similique recusandae necessitatibus officiis nostrum eum repellendus veniam, tempore vitae incidunt consequatur cum quisquam maxime voluptatibus ratione. Quidem, quibusdam aut." name="someField" />

                <div className={styles.showCorrectInfoBlock}>
                  <Report />
                  <h5>Проверьте данные, которые указны у вас в профиле. От имени этого лица будет оформляться заявка. Если даныне в профиле указаны не корректно, то исправьте их в <Link to={`/profile`}>Вашем профиле</Link>. </h5>
                </div>
              </Layout>

            </>
          )
          : <p className="text-center">Пользователь не задан</p>
      }
          {/* <div style={{width: '100%', margin: '10px 0', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
            <Field 
              title={`Я являюсь представителем заявителя <span className="${styles.dataTextComment}"> / необходимо будет заполнить данные реального заявителя</span> `} 
              name="isRepresentative" 
              type="checkbox" 
              as={Checkbox} 
              value={values.isRepresentative } 
              // onChange={handleChangeRepresentative} 
            />
          </div> */}
{/* 
          { 
          values.isRepresentative && (
            <>
            <div className={styles.dataContainer}>
              <div className={styles.flex}>
                <div className={styles.half}>
                  <Field title="ФИО заявителя" name="applicantFio" type="input" as={NewInput} value={values.applicantFio} />
                </div>
                <div className={styles.half}>
                  <Field title="Телефон заявителя" name="applicantPhone" type="input" as={NewInput} value={values.applicantPhone} />
                </div>
              </div>
              <Field title="Документ подтверждающий полномочия(вид документа, номер документа, дата выдачи)" name="representDocument" rows={3} as={NewInput} value={values.representDocument} />
              <p className={`text-center ${styles.dataTextComment}`}>Проверяйте данные заявителя, которого Вы указываете, т.к. все выгрузки будут осуществляться на его имя. </p>
            </div>
            </>
          ) } */}
      <Layout noBoxShadow margin='20px 0' padding="20px">
        <Checkbox 
          title='Я даю согласие на обработку предоставленных мною персональных данных в соответствии с Федеральным законом РФ №152-ФЗ от 27.07.2006 "О персональных данны"' 
          name="personal_checkbox"
          onChange={handleChangeAgreeCheckbox}
        />
      </Layout>
    </>
  )
}
