import React, { useEffect, useCallback,  useState } from 'react'
import { NavigateNext, NavigateBefore, Report } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { NewInput, Button, Checkbox, Layout } from '../../../../components/ui'
import { Formik, Form, Field } from 'formik'
import styles from '../create.module.css'
import NewSelect from './../../../../components/ui/NewSelect/index';
import { useDispatch, useSelector } from 'react-redux';
import { prevStep, nextStep, pushStep } from '../../../../redux/slices/orderCreate'

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
    // {
    //   title: 'ООО "Мокрые кеды',
    //   kpp: 'КПП: 568789778',
    //   bik: 'БИК: 78797',
    //   address: '460000, г.Оренбург, ул.Цвилинга, д.44, офис 104'
    // }
  ]
  
}

export default function Step1({ setPage }) {
  const { sid, currentStep }  = useSelector(store => store.orderCreate)
  const dispatch = useDispatch();

  const [initalValues, setInitialValues] = useState(
    {
      sid,
      applicantFio: `${profile.firstName} ${profile.middleName} ${profile.lastName}`,
      applicantPhone: profile.phone,
      applicantEmail: profile.email,
      applicantInn: profile.inn,
      applicantAddress: profile.address,
      isRepresentative: false,
      representativeFio: '',
      representativePhone: '',
      representDocument: '',
    }
  )

  const handleOnSubmit = useCallback(data => {
    dispatch(pushStep(data));
    dispatch(nextStep());
  }, []);

  const onSubmit = data => {
    handleOnSubmit(data);
  }

  useEffect(( ) => {
    window.scrollTo(0, 0)
  }, [])

  const handleChangeAdminUserList = async item => {
    const { id } = item;
    // const foundedUser = await User.find( id )

    setInitialValues(prev => ({
      applicantFio: 'Петров Петр Петрович',
      applicantEmail: 'petrov@mail.ru',
      applicantAddress: 'Самарская область, г.Самара, ул.Чернореченская, д.56, кв.16'
    }))

  }

  return (
    <>
  
    <Formik initialValues={initalValues} onSubmit={onSubmit} >
      { ({ values, handleChange }) => (
        <Form className={styles.stepContainer}>

          <Layout margin='20px 0' padding="20px" content="flex-start" border={`solid 1px rgba(100, 100, 100, .2)`} borderRounded="10px" gap="3px">
            <div className={styles.adminBox}> 
              <NewSelect 
                title="Выберите пользователя, на которого будет оформляться заявка"
                items={[
                  { id: 0, value: 'Добавить нового пользователя', onSelect: item => alert('select to create a new user: ' + JSON.stringify(item)) },
                  {id: 1, value: 'Петров Петр Петрович | petrov@mail.ru'},
                  {id: 2, value: 'Сидоров Сидор Сидорович | sidorov@yandex.ru'}
                ]} 
                onChange={ e => handleChangeAdminUserList(e)}
              />
              <p style={{fontSize: 12, fontWeight: '300', color: 'silver'}}> I. Администратор сетевой компании имеете возможность создаввать нового пользователя, а также выбирать пользователя, на чье имя будет оформляться заявка Вами</p>
              <p style={{fontSize: 12, fontWeight: '300', color: 'silver'}}>II.Подача заявки администратором может осуществляться только для физического лица мощностью до 15Квт</p>
            </div>
          </Layout>

          <div className="w-100">
            <NewSelect 
              title="Вид заявителя"
              items={[
                {id: 1, value: 'Физическое лицо'},
                {id: 2, value: 'Юридическое лицо'},
                {id: 3, value: 'Индивидуальный предприниматель'},
              ]}
            />
          </div>

          <div className={styles.showCorrectInfoBlock}>
            <Report />
            <h5>Проверьте данные, которые указны у вас в профиле. От имени этого лица будет оформляться заявка. Если даныне в профиле указаны не корректно, то исправьте их в <Link to={`/profile`}>Вашем профиле</Link>. </h5>
          </div>

          { profile.companies.length > 0 && (
            <Layout margin="20px 0" direction="column" align="flex-start">
                <Field title="Физическое лицо" name="sid" type="radio" as={Checkbox} value={1} />
                <Field title="Юридическое лицо или ИП" name="sid" type="radio" as={Checkbox} value={2} />
            </Layout>
          ) }

         {
          values.sid && (
            <div className={styles.dataContainer}>
              <div className={styles.dataText}><span>ФИО:</span>{values.applicantFio}</div>
              <div className={styles.dataText}><span>Фактический адрес:</span>{`${values.applicantAddress}`}</div>
              <div className={styles.dataText}><span>Адрес электронной почты:</span>{`${values.applicantEmail}`}<span className={styles.dataTextComment}> / Основная авторизация осуществляется по Email, все уведомления будут приходить на этот адрес</span></div>
              <div className={styles.dataText}><span>Мобильный телефон:</span>{`${values.applicantPhone}`} <span className={styles.dataTextComment}> / необходим в случае авторизации или получения SMS-оповещений</span></div>
              <div className={styles.dataText}><span>ИНН:</span>{`${values.applicantInn}`} </div>

              <Field name="applicantFio" type="hidden" value={values.applicantFio} />
              <Field name="applicantInn" type="hidden" value={values.applicantInn} />
              <Field name="applicantPhone" type="hidden" value={values.applicantPhone} />
              <Field name="applicantEmail" type="hidden" value={values.applicantEmail} />
              <Field name="applicantFactAddress" type="hidden" value={values.applicantAddress} />
            </div>
          )
         }

        

          <div style={{width: '100%', margin: '10px 0', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
            <Field 
              title={`Я являюсь представителем заявителя <span className="${styles.dataTextComment}"> / необходимо будет заполнить данные реального заявителя</span> `} 
              name="isRepresentative" 
              type="checkbox" 
              as={Checkbox} 
              value={values.isRepresentative } 
              // onChange={handleChangeRepresentative} 
            />
          </div>

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
          ) }

          <Layout margin='20px 0' content="flex-end">
            <Button type="button" disabled={ currentStep > 0 } onClick={() => dispatch(prevStep)}><NavigateBefore /> Назад</Button>
            <Button type="submit">Далее к заполнению цели заявки <NavigateNext /></Button>
          </Layout>
        </Form>
      )}
    </Formik>
    </>
  )
}
